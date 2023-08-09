<template>
  <div>Profile</div>
  <div>{{ profile }}</div>
</template>
<script setup lang="ts">
import liff from "@line/liff";
import { ref } from "vue";

const profile = ref<any>();
if (liff.isLoggedIn()) {
  liff.getProfile().then((pro) => {
    profile.value = pro;
  });
} else {
  console.log("未登入");
}
</script>
