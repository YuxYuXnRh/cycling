<script setup lang="ts"></script>

<template>
  <header class="page-header">
    <h1 class="project-name">行者</h1>
    <h2 class="project-tagline">——去看见</h2>
  </header>
  <main class="main-content">
    <h3>骑行</h3>
    <p class="item">
      <router-link to="/line" class="route">滇藏线</router-link>
      <span>昆明~拉萨</span>
    </p>
  </main>
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
    font-size: 1.1rem;
  }
}

.item {
  margin: 0 2rem;
}

.route {
  display: inline-block;
  width: 15rem;
  font-style: italic;
  color: #000;
}
</style>
