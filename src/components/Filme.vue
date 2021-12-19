<template>
   <div class="card">
        <div class="img">
            <img :src="path" alt="">
        </div>
        <div class="content">
            <h4>{{title}}</h4>
            <h5>{{data}}</h5>
        </div>
        <div class="ratio borda">
            <span>{{ratio }}</span>
            <span>%</span>
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
    ]

}
</script>

<style scoped>

.card {
    margin-right: 30px;
    position: relative;
    
}

.card img {
    border-radius: 20px;
    width: 150px;
    height: 225px;
    margin-bottom: 20px;
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
    bottom: 85px;
    left: 20px;
    
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