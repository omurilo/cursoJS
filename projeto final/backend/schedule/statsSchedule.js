const schedule = require('node-schedule')

module.exports = app => {
    schedule.scheduleJob('*/1 * * * * ', async function(){
        const usersCount = await app.db('users').whereNull('deletedAt').count('id').first()
        const categoriesCount = await app.db('categories').count('id').first()
        const articlesCount = await app.db('articles').count('id').first()
    

        const { Stat } = app.api.stat
        
        const lastStat = await Stat.findOne({}, {}, 
            { sort: { 'createdAt': -1 }})

        const stat = new Stat({
            users: usersCount.count,
            categories: categoriesCount.count,
            articles: articlesCount.count,
            createdAt: Date.now()
        })

        const changeUsers = !lastStat || stat.users !== lastStat.users
        const changeCategories = !lastStat || stat.categories !== lastStat.categories
        const changeArticles = !lastStat || stat.articles !== lastStat.articles

        if(changeUsers || changeArticles || changeCategories){
            stat.save().then(() => console.log('[ Stats ] Estatísticas atualizadas!'))
        }
    })
}