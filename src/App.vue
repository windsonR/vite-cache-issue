<script setup>
import demos from './demos.vue'
import {defineAsyncComponent} from "vue";
// import demo from 'demo/demo.vue'
// const demo1 = defineAsyncComponent({
//   loader: ()=>import('demo/demo.vue')
// })
</script>

<template>
<div>
  <h2>fsd</h2>
  <demos/>
<!--  <demo/>-->
<!--  <demo1/>-->
<!--  <router-view/>-->
  <iframe src="/demo.html" style="width: 200px;height: 200px;"/>
</div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
