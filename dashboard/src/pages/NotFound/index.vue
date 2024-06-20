<template>
  <div class="not-found">
    <h1>走错页面了～</h1>
    <img src="https://pinoss.com/pdan123/i/pdan1/2024/5/b2.gif" alt="" />
    <Button @click="goHome" type="primary">返回首页</Button>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "ant-design-vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
  router.push("/");
};
</script>

<style scoped lang="scss">
/* styles */
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 500px;
    margin: auto;
    margin-bottom: 24px;
  }
}
</style>
