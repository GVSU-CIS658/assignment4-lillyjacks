<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'" />
    <ul>

    <!-- Temperature  -->
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>

      <!-- Base  -->
      <li>
        <template v-for="base in bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base"
              :id="`${base.id}`"
              :value="base"
              v-model="currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>

      <!-- Syrup  -->
      <li>
        <template v-for="syrup in syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="`${syrup.id}`"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>

      <!-- Creamer  -->
      <li>
        <template v-for="creamer in creamers" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="`${creamer.id}`"
              :value="creamer"
              v-model="currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>

    </ul>

    <input v-model="name" type="text" placeholder="Beverage Name" />
    <button @click="handleMakeBeberage">Make Beverage!</button>

    <ul>
      <!-- Custom Beverages  -->
      <li>
        <template v-for="cb in customBeverages" :key="cb.id">
          <label>
            <input
              type="radio"
              name="customBeverage"
              :id="`${cb.id}`"
              :checked="currentBeverage?.id === cb.id"
              @change="beverageStore.showBeverage(cb.id)"
            />
            {{ cb.name }}
          </label>
        </template>
      </li>
    </ul>

  </div>
  <div id="beverage-container" style="margin-top: 20px"></div>
</template>

<script setup lang="ts">

import Beverage from "./components/Beverage.vue";
import { storeToRefs } from "pinia";
import { useBeverageStore } from "./stores/beverageStore";
import { onMounted, ref } from "vue";

const beverageStore = useBeverageStore();
const { temps, bases, syrups, creamers, currentTemp, currentBase, currentSyrup, currentCreamer, customBeverages, currentBeverage } =
  storeToRefs(beverageStore);

const name = ref("");

onMounted(() => {
  beverageStore.$subscribe((mutation, state) => {
    console.log("Mutation:", mutation);
    console.log("State:", state);
  });
})

function handleMakeBeberage() {
  beverageStore.makeBeverage(name.value);
  name.value = ""
}

</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #8d46b9;
  background: linear-gradient(to bottom, #8d46b9 0%, #826792 100%);
}
ul {
  list-style: none;
}
</style>