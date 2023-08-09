<template>Home</template>

<script setup lang="ts">
let url;
if (sessionStorage.getItem("liffLoginRedirect")) {
  url = sessionStorage.getItem("liffLoginRedirect");
  sessionStorage.removeItem("liffLoginRedirect");
  location.href = url;
}
</script>
