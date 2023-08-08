<script setup lang="ts">
import { useRoute } from "vue-router";
import liff from "@line/liff";
import { ref } from "vue";

const route = useRoute();
console.log(route.params.storeID);
</script>
<template>
  <div>Store ID : {{ route.params.storeID }}</div>
  <router-view></router-view>
</template>
