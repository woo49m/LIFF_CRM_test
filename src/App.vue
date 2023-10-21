<template>{{}}</template>

<script setup lang="ts">
import liff from "@line/liff";
console.log("This is APP.vue");
liff
  .init({ liffId: "2000346998-GNX6YwM7" })
  .then(() => {
    if (liff.isLoggedIn()) {
      console.log("登入");
      //login二次導向後 需要使用session url進行三次導向
      //若先前已經授權登入可以直接二次導向

      /* send message and close */
      liff
        .sendMessages([
          {
            type: "text",
            text: "我想跟你打砲",
          },
        ])
        .then(() => {
          console.log("message sent");
        })
        .catch((err) => {
          console.log("error", err);
        });
      liff.closeWindow();
    } else {
      console.log("未登入");
    }
  })
  .catch((err) => {
    console.log("初始化失敗:" + err);
  });
</script>
<style></style>
