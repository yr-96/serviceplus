<template>
  <div class="serviceDetail">
    <div class="header">
      <div class="back" @click="router.go(-1)">
        <LeftOutlined />
      </div>
      <div class="appName">
        {{ appName }}
      </div>
      <div class="ip">
        {{ ip }}
      </div>
    </div>
    <main>
      <div class="search">
        <Input placeholder="请输入搜索内容" @change="handleSearch" />
      </div>
      <div class="result">
        <MethodCard
          v-for="item in displayData"
          :key="item.methodName"
          :data="item"
          @openMethodDrawer="handleOpenMethodDrawer(item)"
        />
      </div>
    </main>
  </div>
  <MethodDrawer
    v-if="methodDrawerVisible && methodItem"
    :visible="methodDrawerVisible"
    :methodItem="methodItem"
    @close="hanldeMethodClose"
  />
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { LeftOutlined } from "@ant-design/icons-vue";
import { Input } from "ant-design-vue";
import { ref } from "vue";
import type { ChangeEvent } from "ant-design-vue/es/_util/EventInterface";

import MethodCard from "./components/MethodCard.vue";
import MethodDrawer from "./components/MethodDrawer.vue";
import { fetchServiceDetail } from "@/service/service.js";

import type { ServiceItemType } from "@/interface/service";

const route = useRoute();
const router = useRouter();
const ip = (route.query?.ip || "") as string;
const appName = (route.query?.appName || "") as string;
const applicationPort = (route.query?.applicationPort || "") as string;

let orginalData: ServiceItemType[] = [];
const displayData = ref<ServiceItemType[]>([]);
const methodDrawerVisible = ref(false);
const methodItem = ref<ServiceItemType>();

const handleSearch = (e: ChangeEvent) => {
  const value = (e.target.value || "").toLowerCase();
  displayData.value = orginalData.filter((item: ServiceItemType) => {
    const { className, methodDesc, methodName } = item;

    return (
      className.toLowerCase().includes(value) ||
      methodDesc.toLowerCase().includes(value) ||
      methodName.toLowerCase().includes(value)
    );
  });
};

const handleOpenMethodDrawer = (item: any) => {
  methodDrawerVisible.value = true;
  methodItem.value = item;
};

const hanldeMethodClose = () => {
  methodDrawerVisible.value = false;
  methodItem.value = undefined;
};

const init = async () => {
  try {
    const res = await fetchServiceDetail(appName, ip, applicationPort);
    displayData.value = res;
    orginalData = res;
  } catch (error) {}
};

init();
</script>
<style scoped lang="scss">
@import "@/style/variable.scss";

.serviceDetail {
  background-color: white;
  .header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-bottom: 1px solid $divider-color;

    .back {
      font-size: 20px;
      cursor: pointer;
    }
    .appName {
      font-size: 24px;
    }
    .ip {
      font-size: 16px;
    }
  }
  main {
    padding: 16px;
    .search {
      width: 200px;
    }
    .result {
      margin-top: 12px;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
