<template>Home</template>

<script setup lang="ts">
let url;
if (sessionStorage.getItem("liffLoginRedirect")) {
  url = <string>sessionStorage.getItem("liffLoginRedirect");
  sessionStorage.removeItem("liffLoginRedirect");
  location.href = url;
}
</script>
