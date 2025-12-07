<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto;
}

.logo-wrapper {
  background: #710d7e;
  height: 100%;
}

main,
main > * {
  height: 100%;
}

@media (min-width: 900px) {
  header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .logo {
    margin: 0;
  }

  .logo-wrapper {
    margin-left: -100%;
    padding-left: 100%;
    margin-right: 20%;
  }
}
</style>
