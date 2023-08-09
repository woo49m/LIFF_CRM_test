<template>
  <router-view />
</template>

<script setup lang="ts">
import liff from "@line/liff";

liff
  .init({ liffId: "2000346998-GNX6YwM7" })
  .then(() => {
    console.log("初始化成功");
    if (liff.isLoggedIn()) {
      console.log("登入");
      //login二次導向後 需要使用session url進行三次導向
      //若先前已經授權登入可以直接二次導向
      let temp_url;
      if (sessionStorage.getItem("liffLoginRedirect")) {
        temp_url = sessionStorage.getItem("liffLoginRedirect");
        sessionStorage.removeItem("liffLoginRedirect");
        location.href = temp_url;
      }
    } else {
      console.log("未登入");
      //在login二次導向前 儲存預設導向URL
      sessionStorage.setItem("liffLoginRedirect", location.href);
      console.log("session url: " + location.href);
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
