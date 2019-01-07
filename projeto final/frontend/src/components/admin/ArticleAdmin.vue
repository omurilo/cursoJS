<template>
    <div class="article-admin">
        <b-form>
            <input type="hidden" id="article-id" v-model="article.id">
            <b-form-group label="Nome:" label-for="article-name">
                <b-input id="article-name" type="text" v-model="article.name"
                    required placeholder="Informe o Nome do Artigo..."
                    :readonly="mode === 'remove'"/>
            </b-form-group>
            <b-form-group label="Descrição:" label-for="article-description">
                <b-input id="article-description" type="text" v-model="article.description"
                    required placeholder="Informe a Descrição do Artigo..."
                    :readonly="mode === 'remove'"/>
            </b-form-group>
            <b-form-group v-if="mode === 'save'"
                label="Imagem (URL):" label-for="article-imageUrl">
                <b-input id="article-imageUrl" type="text" v-model="article.imageUrl"
                    placeholder="Informe a URL da Imagem do Artigo..."
                    :readonly="mode === 'remove'"/>
            </b-form-group>
            <b-form-group v-if="mode === 'save'"
                label="Categoria:" label-for="article-category">
                <b-form-select  required
                    id="article-category" v-model="article.categoryId" :options="categories">
                    <template slot="first">
                        <option :value="null">Selecione uma Categoria...</option>
                    </template>
                </b-form-select>
            </b-form-group>
            <b-form-group v-if="mode === 'save'" 
                label="Autor:" label-for="article-author">
                <b-form-select  required
                    id="article-author" v-model="article.userId" :options="users">
                    <template slot="first">
                        <option :value="null">Selecione um(a) Autor(a)...</option>
                    </template>
                </b-form-select>
            </b-form-group>
            <b-form-group v-if="mode === 'save'"
                label="Conteúdo:" label-for="article-content">
                <vue-editor id="article-content" type="VueEditor" v-model="article.content"
                    :editorOptions="editorSettings"
                    required placeholder="Informe o Conteúdo do Artigo..." />
            </b-form-group>
            <b-button variant="primary" v-if="mode === 'save'" 
                @click="save">Salvar</b-button>
            <b-button variant="danger" v-if="mode === 'remove'"
                @click="remove">Excluir</b-button>
            <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-form>
        <hr>
        <b-table responsive hover striped :items="articles" :fields="fields">
            <template slot="userId" slot-scope=""></template>
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadArticle(data.item)" class="mr-2 mb-2">
                <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadArticle(data.item, 'remove')" class="mb-2">
                <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
        <b-pagination size="md" align="center" :total-rows="count" v-model="page" :per-page="limit"></b-pagination>
    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl, showError } from '@/global'
import { VueEditor } from "vue2-editor"
import hljs from 'highlightjs'
import 'highlightjs/styles/dracula.css'

export default {
    name: 'ArticleAdmin',
    components: {
        VueEditor
    },
    data: function(){
        return {
            mode: 'save',
            article: {},
            articles: [],
            categories: [],
            users: [],
            page: 1,
            limit: 0,
            count: 0,
            fields: [
                {key: "id", label: "Código", sortable: true},
                {key: "name", label: "Nome", sortable: true},
                {key: "description", label: "Descrição", sortable: true},
                {key: "actions", label: "Ações"}
            ],
            editorSettings: {
                modules: {
                    syntax: {
                        highlight: text => hljs.highlightAuto(text).value
                    }
                }
            }
        }
    },
    methods: {
        loadArticles(){
            axios.get(`${baseApiUrl}/articles?page=${this.page}`)
                .then(res => {
                    this.articles = res.data.data
                    this.limit = res.data.limit
                    this.count = res.data.count
                })
        },
        loadCategories(){
            axios.get(`${baseApiUrl}/users`)
                .then(resp => {
                    this.users = resp.data.map(user => {
                        return { value: user.id, text: `${user.name} - ${user.email}` }
                    })
                })
        },
        loadUsers(){
            axios.get(`${baseApiUrl}/categories`)
                .then(response => {
                    this.categories = response.data.map(category => {
                        return { value: category.id, text: category.path }
                    })
                })
        },
        reset(){
            this.mode = 'save'
            this.article = {}
            this.loadArticles()
        },
        save(){
            const method = this.article.id ? "put" : "post"
            const id = this.article.id ? `/${this.article.id}` : ""
            axios[method](`${baseApiUrl}/articles${id}`, this.article)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        remove(){
            axios.delete(`${baseApiUrl}/articles/${this.article.id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
                },
        loadArticle(article, mode = 'save'){
            this.mode = mode
            // this.article = { ...article }
            axios.get(`${baseApiUrl}/articles/${article.id}`)
                .then(res => this.article = res.data)
        }
    },
    watch: {
        page(){
            this.loadArticles()
        }
    },
    mounted(){
        this.loadArticles()
        this.loadCategories()
        this.loadUsers()
    }
}
</script>

<style>

</style>
