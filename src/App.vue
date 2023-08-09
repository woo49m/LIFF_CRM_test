<template>
  <router-view />
</template>

<script setup lang="ts">
import liff from "@line/liff";

liff
  .init({ liffId: "2000346998-GNX6YwM7" })
  .then(() => {
    console.log(liff.getVersion());
    console.log("初始化成功");
    if (liff.isLoggedIn()) {
      console.log("登入");
    } else {
      console.log("未登入");
      liff.login();
    }
  })
  .catch(() => {
    console.log("初始化失敗");
  });
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
