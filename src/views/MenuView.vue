<script setup lang="ts">
import liff from "@line/liff";
import { ref } from "vue";

liff
  .init({ liffId: "2000282081-MblO1kW3" })
  .then(() => {
    console.log("初始化成功");
    if (liff.isLoggedIn()) {
      console.log("登入");
    } else {
      console.log("未登入");
    }
  })
  .catch(() => {
    console.log("初始化失敗");
  });
</script>
<template>Menu</template>
