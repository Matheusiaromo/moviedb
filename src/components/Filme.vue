<template>
   <div class="card">
        <div class="img">
            <img :src="path" alt="">
            <div class="ratio borda">
            <span>{{ratio | tiraPonto}}</span>
            <span>%</span>
        </div>
        </div>
        <div class="content">
            <h4>{{title}}</h4>
            <h5>{{data}}</h5>
        </div>
        
    </div>
</template>

<script>
export default {
    
    props: [
        'path',
        'title',
        'data',
        'ratio'
    ],
    filters: {
        tiraPonto(numero){
            const newValue = numero.toString()
            return newValue.replace('.', '')
        }
    }

}
</script>

<style scoped>

.card {
    margin-right: 30px;
    
    
}

.card img {
    border-radius: 20px;
    width: 150px;
    height: 225px;
    margin-bottom: 20px;
    
}

.img {

position: relative;
}

.ratio {
    position: absolute;
    background: #000;
    width: 35px;
    height: 35px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    bottom: 8px;
    left: 20px;
    font-weight: 700    ;
}

.borda {
    border:2px solid #000;
    outline: 3px solid green;
    outline-offset: -4px;
}

.ratio span:nth-child(1) {
    font-size: 12px;
    font-weight: 600s;
}

.ratio span:nth-child(2) {
    font-size: 8px;
    vertical-align: top ;
}

</style>