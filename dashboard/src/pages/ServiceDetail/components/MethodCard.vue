<template>
  <div class="methodCard">
    <Card :title="data.methodName" hoverable>
      <div class="cardMain">
        <div class="beanName">{{ data.className }}</div>
        <div class="methodDesc">{{ data.methodDesc }}</div>
      </div>
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

defineProps<{
  data: any;
}>();

const emits = defineEmits(["openMethodDrawer"]);
</script>

<style scoped lang="scss">
.methodCard {
  width: 300px;
  margin-right: 12px;
  margin-bottom: 12px;
  .cardMain {
    height: 40px;
    overflow: auto;
    .beanName {
      font-size: 12px;
      color: #999;
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
