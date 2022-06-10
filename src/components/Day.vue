<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return { day: '' as string | string[] }
  },
  created() {
    this.day = this.$route.params.id
  }
})
</script>

<template>
  <header class="page-header">
    <h1 class="project-name">Day {{day}}</h1>
  </header>
  <main class="main-content">
  </main>
</template>

<style scoped>
</style>
