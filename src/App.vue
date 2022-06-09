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

.cite {
  display: inline-block;
  text-align: right;
  font-size: 12px;
}
</style>
