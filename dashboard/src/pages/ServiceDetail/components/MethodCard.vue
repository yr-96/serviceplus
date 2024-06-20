<template>
  <div class="methodCard">
    <Card hoverable>
      <div class="cardMain">
        <div class="beanName">{{ data.className }}</div>
        <div class="methodDesc">{{ data.methodDesc }}</div>
      </div>
      <template #title>
        <div class="methodTitle">
          <img src="@/assets/funciton.png" alt="" /> {{ data.methodName }}
        </div>
      </template>
      <template #actions>
        <Tooltip title="点击执行">
          <div class="actionIcon">
            <PlayCircleOutlined @click="emits('openMethodDrawer')" />
          </div>
        </Tooltip>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { Card, Tooltip } from "ant-design-vue";
import { PlayCircleOutlined } from "@ant-design/icons-vue";
import type { ServiceItemType } from "@/interface/service";

defineProps<{
  data: ServiceItemType;
}>();

const emits = defineEmits(["openMethodDrawer"]);
</script>

<style scoped lang="scss">
@import "@/style/variable.scss";

.methodCard {
  width: 300px;
  margin-right: 12px;
  margin-bottom: 12px;

  .methodTitle {
    display: flex;
    font-family: $basic-font-family;
    img {
      width: 24px;
      height: 24px;
      margin-right: 6px;
    }
  }
  .cardMain {
    height: 40px;
    overflow: auto;
    .beanName {
      font-size: 12px;
      color: #999;
      font-family: $basic-font-family;
    }
  }
  .actionIcon {
    .anticon :hover {
      animation: shake 0.3s;
      animation-iteration-count: 1;
    }
  }
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  20%,
  60% {
    transform: translateX(-1px);
  }

  40%,
  80% {
    transform: translateX(1px);
  }
}
</style>
