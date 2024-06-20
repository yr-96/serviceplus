<template>
  <div class="appListInstance">
    <BadgeRibbon :text="`:${appInfo.applicationPort}`">
      <Card hoverable @click="goServiceDetail()">
        <div class="appHeader">
          <img src="@/assets/java.png" alt="" />
        </div>
        <div class="appName" :title="appInfo.applicationName">
          {{ appInfo.applicationName }}
        </div>
        <div class="tags">
          <Tag color="#966F33">
            {{ appInfo.applicationType }}
          </Tag>
        </div>
      </Card>
    </BadgeRibbon>
  </div>
</template>
<script setup lang="ts">
import { Card, Tag, BadgeRibbon } from "ant-design-vue";
import { AppItemType } from "@/interface/app";

import { toServiceDetail } from "@/route/routerMethod";

const props = defineProps<{
  appInfo: AppItemType;
}>();

const goServiceDetail = (ip?: string) => {
  const { ipList, applicationName, applicationPort } = props.appInfo || {};
  toServiceDetail(ip || ipList[0], applicationName, applicationPort);
};
</script>
<style scoped lang="scss">
@import "@/style/variable.scss";

.appListInstance {
  margin-right: 24px;
  margin-bottom: 12px;
  width: 300px;
  .appHeader {
    img {
      width: 48px;
      height: 48px;
    }
  }
  .appName {
    margin: 12px 0;
    font-size: 18px;
    height: 40px;
    font-family: $basic-font-family;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
