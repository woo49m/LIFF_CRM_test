<template>
  <div>Profile</div>
  <div>{{ profile }}</div>
</template>
<script setup lang="ts">
import liff from "@line/liff";
import { ref } from "vue";

const profile = ref<any>();
liff
  .init({ liffId: "2000346998-GNX6YwM7" })
  .then(() => {
    if (liff.isLoggedIn()) {
      liff.getProfile().then((pro) => {
        profile.value = pro;
      });
    } else {
      console.log("未登入");
    }
  })
  .catch(() => {
    console.log("初始化失敗");
  });
</script>
