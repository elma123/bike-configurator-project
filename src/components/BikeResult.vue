<template>
  <div class="result-wrapper">
    <div class="result">
      <h1>{{ bike.name }}</h1>
      <img
        :alt="`${bike.name} bike`"
        class="image"
        :src="`src/assets/bikes/bike-${bike.id}.png`"
        width="768"
        height="576"
      />
    </div>

    <div class="price-wrapper">
      <span>Price</span>
      <div class="price">
        € {{ bike.price }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Bike } from '@/types/bike';

defineProps<{ bike: Bike }>();
</script>

<style scoped>
.result-wrapper {
  padding: 2rem 1rem;
  background: #710d7e;
  color: #fff;
}

.result {
  margin-bottom: -5rem;
}

.price-wrapper {
  position: fixed;
  display: flex;
  align-items:  baseline;
  column-gap: 1rem;
  inset: auto 0 0 0;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  background: #710d7e;
}

.price {
  font-size: 2rem;
}

h1 {
  text-transform: uppercase;
}

@media (min-width: 900px) {
  .result-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 20% 0 -100%;
    padding: 10rem 0 0 100%;
  }

  .result {
    margin-bottom: 0;
  }

  .image {
    max-width: 120%;
  }

  .price-wrapper {
    position: relative;
    flex-direction: column;
    padding: 0;
    background: none;
  }
}
</style>
