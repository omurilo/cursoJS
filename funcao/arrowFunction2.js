function Pessoa(){
    this.idade = 0

    setInterval(() => { // this em arrow function
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa