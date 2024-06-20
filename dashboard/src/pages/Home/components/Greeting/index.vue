<template>
  <div class="greeting">
    <img src="@/assets/servicePlus.jpg" />
    <div class="text">
      <div class="name">下午好！系统管理员</div>
      <div class="yiyan">{{ sentence }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { fetchEveryDaySentence } from "@/service/externalApi";
import { ref } from "vue";

const sentence = ref("");

const getSentence = async () => {
  try {
    const res = await fetchEveryDaySentence();
    sentence.value = res.content;
  } catch (error) {}
};

getSentence();
</script>

<style scoped lang="scss">
@import "@/style/variable.scss";

.greeting {
  padding: 16px 24px;
  background-color: white;
  display: flex;
  img {
    width: 68px;
    height: 68px;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 12px;
    .name {
      font-size: 20px;
    }
    .yiyan {
      font-size: 14px;
      color: gray;
    }
  }
}
</style>
