<template>
  <div>
    <div>
      <h1>{{ bike.name }}</h1>
      <img
        :alt="`${bike.name} bike`"
        class="logo"
        :src="`src/assets/bikes/bike-${bike.id}.png`"
        width="768"
        height="576"
      />
    </div>

    <div>
      <span>Price</span>
      {{ bike.price }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Bike } from '@/types/bike';

const props = defineProps<{ bike: Bike }>();
</script>
