<template>
  <div class="result-wrapper">
    <div class="result">
      <h1>{{ bike.name }}</h1>
      <img
        :alt="`${bike.name} bike`"
        class="image"
        :src="`src/assets/bikes/bike-${bikeId}.png`"
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
import { computed } from 'vue';
import type { Bike } from '@/types/bike';

const props = defineProps<{ bike: Bike }>();

const bikeId = computed(() => {
  return props.bike.id > 6 ? 1 : props.bike.id;
});

</script>

<style scoped>
.result-wrapper {
  padding: 2rem 1rem;
  background: darkblue;
  color: #fff;
}

.result {
  margin-bottom: -5rem;
}

.price-wrapper {
  position: fixed;
  display: flex;
  align-items:  baseline;
  gap: 1rem;
  inset: auto 0 0 0;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  background: darkblue;
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
    padding: 5rem 0 0 100%;
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
  }
}
</style>
