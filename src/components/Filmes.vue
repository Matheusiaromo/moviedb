<template>

<div class="container">
    <div class="title">
        <h1>{{sessionTitle}}</h1>
        <h1>Aqui vai um select</h1>
    </div>
    <div class="filmes">  
        <Filme
        v-for="(filme, index) in filmes"
        :key="index"
        :path="path + filme.poster_path" 
        :title="filme.title"
        :data="filme.release_date" 
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
            path: "https://image.tmdb.org/t/p/w220_and_h330_face"
        }
    }, 
    props: [
        'sessionTitle'
    ],
    components: {
        Filme
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
}

</style>