<script setup lang="ts">
import { ref } from 'vue'

const dataSource = ref([
  {
    day: 1,
    line: '昆明盘龙区-安宁县-禄丰市',
    distance: 108.9,
    time: 7,
    accommodationAltitude: '1582',
    remark: '13:17 出发',
  },
])

const columns = ref([
  {
    title: '序号',
    dataIndex: 'day',
    key: 'day',
    slots: { customRender: 'day' },
  },
  {
    title: '行程',
    dataIndex: 'line',
    key: 'line',
  },
  {
    title: '路程（公里）',
    dataIndex: 'distance',
    key: 'distance',
  },
  {
    title: '时间（小时）',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '住宿点海拔（米）',
    dataIndex: 'accommodationAltitude',
    key: 'accommodationAltitude',
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
  },
])
</script>

<template>
  <header class="page-header">
    <h1 class="project-name">线</h1>
  </header>
  <main class="main-content">
    <h3>日程</h3>
    <a-table :dataSource="dataSource" :columns="columns" :pagination="false">
      <template #day="{ text }">
        <router-link :to="`/day/${text}`" class="route">{{text}}</router-link>
      </template>
    </a-table>
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
  text-decoration: underline;
  cursor: pointer;
}
</style>
