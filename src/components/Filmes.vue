<template>

<div class="container">
    <div class="title">
        <h2>{{sessionTitle}}</h2>
        <ul class="select">
            <li @click="filmesStreaming">Streaming</li>
            <li @click="filmesTV">Na TV</li>
        </ul>
    </div>

    
   
    <div class="filmes">  
         <Filme
        
        v-for="(filme, index) in filmes"
        :key="index"
        :path="path + filme.poster_path" 
        :title="filme.name ? filme.name : filme.title"
        :data="filme.first_air_date ? filme.first_air_date : filme.release_date" 
        :ratio="filme.vote_average"
        />
    </div>
    
        
</div>



</template>

<script>

import {api} from '@/services/config';
import Filme from '@/components/Filme';

export default {

    data() {
        return {
            filmes: [],
            path: "https://image.tmdb.org/t/p/w220_and_h330_face",
            isTV: false
        }
    }, 
    props: [
        'sessionTitle'
    ],
    components: {
        Filme
    },
    methods: {
        filmesStreaming(){
            api.get(`/discover/movie`).then(res => {
            this.filmes = res.data.results;
            console.log(this.filmes)
          
        })
        },
        filmesTV(){
            api.get(`/discover/tv`).then(res => {
            this.filmes = res.data.results;
            console.log(this.filmes)
            
        })
        }
    },
    mounted(){
        api.get(`/discover/movie`).then(res => {
            this.filmes = res.data.results;
            console.log(this.filmes)
        })
    }

}
</script>

<style scoped>

div {
    color: #000;
}

.filmes {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    padding-bottom: 20px;
}


.title {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    align-items: center;
}

.select {
    list-style: none;
    border-radius: 20px;
    color: var(--primary);
    font-weight: 700;
    font-size: 15px;
    border: 1px solid var(--primary);
    padding: 0px;
   
}

.select li {
        display: inline-block;
        padding: 5px 20px;
    
}

.select li:hover {
    background: var(--primary);
    border-radius: 20px;
    color: var(--green);
    font-weight: 700;
    cursor: pointer;
}
</style>