<template>
  <div class="appListPage">
    <div class="applistHeader">应用</div>
    <div class="search">
      <Input placeholder="请输入搜索内容" @change="handleSearch" />
    </div>
    <div class="appContent">
      <div class="loading" v-if="loading">
        <Spin size="large" />
      </div>
      <div class="applist" v-else-if="appList.length">
        <AppItem
          v-for="item in appList"
          :key="item.applicationName"
          :appInfo="item"
          class="applistItem"
        />
      </div>
      <div class="applistEmpty" v-else>
        <Empty description="暂无应用" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Spin, Empty, Input } from "ant-design-vue";
import AppItem from "./components/AppItem.vue";

import { fetchAppList } from "@/service/app";
import type { AppItemType } from "@/interface/app";
import type { ChangeEvent } from "ant-design-vue/es/_util/EventInterface";

const appList = ref<AppItemType[]>([]);
let orginalData: AppItemType[] = [];
const loading = ref(false);

const init = async () => {
  try {
    loading.value = true;
    const res = await fetchAppList();
    appList.value = res;
    orginalData = res;
  } catch (error) {
  } finally {
    loading.value = false;
  }
};

init();

const handleSearch = (e: ChangeEvent) => {
  const value = e.target.value || "";
  const filterData = orginalData.filter((item) => {
    return (
      item.applicationName.includes(value) ||
      item.ipList.some((ip) => ip.includes(value))
    );
  });
  appList.value = filterData;
};
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";

.appListPage {
  background-color: white;
  margin: 6px;
  box-sizing: border-box;
  .applistHeader {
    height: 44px;
    line-height: 24px;
    padding: 10px 16px;
    position: relative;
    box-sizing: border-box;
    border-bottom: 1px solid $divider-color;
    &::after {
      content: "";
      width: 4px;
      height: 50%;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: #4080ff;
      border-radius: 0 4px;
    }
  }
  .search {
    width: 200px;
    margin-left: 24px;
    margin-top: 24px;
  }
  .appContent {
    padding: 24px;
    .applist {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .loading {
      margin: auto;
      padding: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
