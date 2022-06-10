<script setup lang="ts"></script>

<template>
  <router-view></router-view>
  <footer>
    <p class="cite">行者独步于遥远的旷野，素昧平生的未知，遭遇处处的难题，只因为一个执着的信任，敢于把世界上任何一片土地都放在脚下<p><cite>——余秋雨《行者无疆》</cite></p></p>
  </footer>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Architects Daughter', 'Helvetica Neue', Helvetica, Arial, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  margin: 0;
  padding: 0;
}

.page-header {
  padding: 5rem 6rem;
  color: #fff;
  text-align: center;
  background-image: linear-gradient(120deg, #155799, #66CCFF);
}

.main-content {
  flex-grow: 1;
  text-align: left;
  word-wrap: break-word;
}

@media screen and (min-width: 42em) and (max-width: 64em) {
  .main-content {
    padding: 2rem 4rem;
    font-size: 1.1rem;
  }
}

@media screen and (min-width: 64em) {
  .main-content {
    max-width: 64rem;
    padding: 2rem 6rem;
    font-size: 1.1rem;
  }
}

.cite {
  display: inline-block;
  text-align: right;
  font-size: 12px;
}
</style>
