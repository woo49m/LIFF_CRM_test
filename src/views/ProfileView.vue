<template>
  <div>會員資料 :</div>
  <div>會員姓名：{{ name }}</div>
  <div></div>
</template>
<script setup lang="ts">
import liff from "@line/liff";
import { ref } from "vue";
const picture_src = ref<string>("");
const name = ref<string>("");
</script>
