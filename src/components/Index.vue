<script setup lang="ts"></script>

<template>
  <header class="page-header">
    <h1 class="project-name">行者</h1>
    <h2 class="project-tagline">——去看见</h2>
  </header>
  <main class="main-content">
    <p><a herf="#">滇藏线</a></p>
  </main>
  <footer>
    <p class="cite">行者独步于遥远的旷野，素昧平生的未知，遭遇处处的难题，只因为一个执着的信任，敢于把世界上任何一片土地都放在脚下<p><cite>——余秋雨《行者无疆》</cite></p></p>
  </footer>
</template>

<style scoped>
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
    margin: 0 auto;
    font-size: 1.1rem;
  }
}

.cite {
  display: inline-block;
  text-align: right;
  font-size: 12px;
}
</style>
