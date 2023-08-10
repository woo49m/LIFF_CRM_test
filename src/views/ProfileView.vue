<template>
  <div>會員資料 :</div>
  <div>會員姓名：{{ name }}</div>
  <div>
    <img :src="picture_src" />
  </div>
  <div>{{ profile }}</div>
</template>
<script setup lang="ts">
import liff from "@line/liff";
import { ref } from "vue";
const picture_src = ref<string>("");
const name = ref<string>("");
const profile = ref<any>();
if (liff.isLoggedIn()) {
  liff.getProfile().then((pro) => {
    profile.value = pro;
    name.value = pro.displayName;
    picture_src.value = pro.pictureUrl;
  });
} else {
  console.log("未登入");
}
</script>
