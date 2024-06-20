<template>
  <div class="appListInstance">
    <Card hoverable>
      <div class="appHeader" @click="toServiceDetail()">
        <img src="@/assets/servicePlus.jpg" alt="" />
        <div class="appName">
          {{ appInfo.applicationName }}
        </div>
      </div>
      <div class="ipList">
        <div
          v-for="ip in appInfo.ipList"
          :key="ip"
          class="ipItem"
          @click="toServiceDetail(ip)"
        >
          <div class="ip">
            {{ ip }}
          </div>
          <div class="icon">
            <ArrowRightOutlined />
          </div>
        </div>
      </div>
      <div class="tags">
        <Tag color="#966F33">
          {{ appInfo.applicationType }}
        </Tag>
        <Tag color="blue">
          {{ appInfo.applicationPort }}
        </Tag>
      </div>
    </Card>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { Card, Tag } from "ant-design-vue";
import { ArrowRightOutlined } from "@ant-design/icons-vue";
import { AppItemType } from "@/interface/app";

const router = useRouter();

const props = defineProps<{
  appInfo: AppItemType;
}>();

const toServiceDetail = (ip?: string) => {
  const { ipList, applicationName, applicationPort } = props.appInfo || {};
  router.push({
    path: "/serviceDetail",
    query: {
      ip: ip || ipList[0],
      appName: applicationName,
      applicationPort: applicationPort,
    },
  });
};
</script>
<style scoped lang="scss">
@import "@/style/variable.scss";

.appListInstance {
  margin-right: 12px;
  margin-bottom: 12px;
  .appHeader {
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: #0070cc;
    }

    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    .appName {
      font-size: 20px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
    }
  }
  .ipList {
    padding: 12px;
    height: 120px;
    overflow: auto;
    margin: 6px 0;
    background-color: #35a7ff0d;
    border-radius: 12px;
    .ipItem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 30px;
      padding: 4px 12px;
      box-sizing: border-box;
      margin-bottom: 6px;
      cursor: pointer;
      border-radius: 4px;
      .icon {
        opacity: 0;
        margin-right: 24px;
        color: #0070cc;
        transition: 0.3s all ease;
      }
      &:hover {
        background-color: white;
        box-shadow: 0 2px 4px rgb(0, 0, 0, 0.1);
        .icon {
          opacity: 1;
          margin-right: 0px;
        }
      }
    }
  }
}
</style>
