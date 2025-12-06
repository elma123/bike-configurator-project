<template>
  <div class="wrapper">
    <BikeResult :bike="generatedBike"/>

    <div class="configurator">
      <h2 class="title"><strong>Configure</strong> your bike</h2>
      <form>
        <fieldset>
          <legend>Choose a model:</legend>
          <div>
            <input type="radio" id="city" name="model" value="city" v-model="chosenModel" checked />
            <label for="city">City</label>
          </div>
          <div>
            <input type="radio" id="cargo" name="model" value="cargo" v-model="chosenModel" />
            <label for="cargo">Cargo</label>
          </div>
          <div>
            <input type="radio" id="sporty" name="model" value="sporty" v-model="chosenModel" />
            <label for="sporty">Sporty</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Choose a frame:</legend>
          <div>
            <input type="radio" id="high" name="frame" value="high" v-model="chosenFrame" checked />
            <label for="high">High step</label>
          </div>
          <div>
            <input type="radio" id="low" name="frame" value="low" v-model="chosenFrame" />
            <label for="low">Low step</label>
          </div>
          <div>
            <input type="radio" id="mid" name="frame" value="mid" v-model="chosenFrame" />
            <label for="mid">Mid step</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Choose a paintwork:</legend>
          <div>
            <input type="radio" id="white" name="paintwork" value="white" v-model="chosenPaintwork" checked />
            <label for="white">Frost White</label>
          </div>
          <div>
            <input type="radio" id="blue" name="paintwork" value="blue" v-model="chosenPaintwork" />
            <label for="blue">Midnight Blue</label>
          </div>
          <div>
            <input type="radio" id="red" name="paintwork" value="red" v-model="chosenPaintwork" />
            <label for="red">Candy Cane Red</label>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Bike } from '@/types/bike';
import bikes from '@/data/bikes.json' with { type: 'json' };
import BikeResult from '@/components/BikeResult.vue'

const bikeModels = bikes as Bike[];

// initial values
const chosenModel = ref('city');
const chosenFrame = ref('high');
const chosenPaintwork = ref('white');

// calculate new values
let generatedBike = computed<Bike>(() =>
  bikeModels.find((bike) =>
    bike.model === chosenModel.value &&
    bike.frame === chosenFrame.value &&
    bike.paintwork === chosenPaintwork.value
  )!
);
</script>

<style scoped>
.wrapper {
  display: grid;
  align-items: flex-start;
}

.configurator {
  padding: 2rem 1rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

div:has(> input) {
  display: flex;
  gap: 1rem;
}

@media (min-width: 900px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
  }

  .configurator {
    padding: 5rem 0 0 2rem;
  }

  .title {
    font-size: 3rem;
  }
}
</style>
