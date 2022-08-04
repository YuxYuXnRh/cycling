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
    <h1 class="line-name">线</h1>
  </header>
  <main class="main-content">
    <a-collapse :bordered="false">
      <a-collapse-panel key="1" header="前期准备">
        <ol>信息收集
          <li>路线：沿线地形、海拔、城镇情况等</li>
          <li>攻略：行程安排</li>
          <li>疫情：沿线疫情、防疫政策等</li>
          <li>服务联盟：沿线旅馆、餐馆、咨询等</li>
        </ol>
        <ol>骑行训练
          <li>饮食、睡眠</li>
          <li>训练
            <ol>
              <li>周末：150、160、180、200、240</li>
              <li>工作日：30+60</li>
            </ol>
          </li>
          <li>补胎、调刹车、调变速</li>
        </ol>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="装备">
        <p>装备</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="日程">
        <a-table :dataSource="dataSource" :columns="columns" :pagination="false">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'day'">
              <router-link :to="`/day/${record.day}`" class="route">{{record.day}}</router-link>
            </template>
          </template>
        </a-table>
      </a-collapse-panel>
    </a-collapse>
  </main>
</template>

<style scoped>
.line-name {
  color: #fff;
}

.main-content {
  width: 72rem;
  margin: 0 auto;
}

ol {
  margin-left: 2rem;
}

.route {
  display: inline-block;
  width: 100%;
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
}
</style>
