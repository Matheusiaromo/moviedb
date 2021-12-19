<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />

  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';


export default {

components: {
  Header,
  Footer
}

}
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');



* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

html, body {
  font-family: 'Source Sans Pro', sans-serif;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
}

:root {
  --primary: #032541;
  --blue: #02B5E2;
  --green: #1CD3AC;

}

</style>
