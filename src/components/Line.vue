<script setup lang="ts">

const dataSource = [
  {
    day: 1,
    line: '昆明盘龙区-安宁县-禄丰市',
    distance: 108.9,
    time: 7,
    accommodationAltitude: '1582',
    remark: '13:17 出发',
  },
]

const columns = [
  {
    title: '序号',
    dataIndex: 'day',
    key: 'day',
    width: '10%',
  },
  {
    title: '行程',
    dataIndex: 'line',
    key: 'line',
    width: '35%',
  },
  {
    title: '路程（KM）',
    dataIndex: 'distance',
    key: 'distance',
    width: '15%',
  },
  {
    title: '时间（h）',
    dataIndex: 'time',
    key: 'time',
    width: '10%',
  },
  {
    title: '住宿点海拔（米）',
    dataIndex: 'accommodationAltitude',
    key: 'accommodationAltitude',
    width: '15%',
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
    width: '15%',
  },
]
</script>

<template>
  <header class="page-header">
    <h1 class="project-name">线</h1>
  </header>
  <main class="main-content">
    <h3>日程</h3>
    <a-table :dataSource="dataSource" :columns="columns" :pagination="false">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'day'">
          <router-link :to="`/day/${record.day}`" class="route">{{record.day}}</router-link>
        </template>
      </template>
    </a-table>
  </main>
</template>

<style scoped>
.route {
  display: inline-block;
  width: 100%;
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
}
</style>
