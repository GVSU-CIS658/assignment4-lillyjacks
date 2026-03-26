<template>
  <div>
    <Beverage
      :isIced="currentTemp === 'Cold'"
      :base="currentBase"
      :creamer="currentCreamer"
      :syrup="currentSyrup"
    />
    <ul>
  <!-- Temperature -->
  <li>
    <template v-for="temp in temps" :key="temp">
      <label>
        <input
          type="radio"
          name="temperature"
          :value="temp"
          v-model="currentTemp"
        />
        {{ temp }}
      </label>
    </template>
  </li>

  <!-- Base Beverage -->
  <li>
    <template v-for="base in bases" :key="base">
      <label>
        <input
          type="radio"
          name="base"
          :value="base"
          v-model="currentBase"
        />
        {{ base }}
      </label>
    </template>
  </li>

  <!-- Creamer -->
  <li>
    <template v-for="creamer in creamers" :key="creamer">
      <label>
        <input
          type="radio"
          name="creamer"
          :value="creamer"
          v-model="currentCreamer"
        />
        {{ creamer }}
      </label>
    </template>
  </li>

  <!-- Syrup -->
  <li>
    <template v-for="syrup in syrups" :key="syrup">
      <label>
        <input
          type="radio"
          name="syrup"
          :value="syrup"
          v-model="currentSyrup"
        />
        {{ syrup }}
      </label>
    </template>
  </li>
</ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
import { temps, currentTemp } from "./stores/beverage";

const bases = ["Coffee", "Green Tea", "Black Tea"];
const creamers = ["No Creamer", "Milk", "Cream", "Half & Half"];
const syrups = ["No Syrup", "Vanilla", "Caramel", "Hazelnut"];

const currentBase = ref("Coffee");
const currentCreamer = ref("No Creamer");
const currentSyrup = ref("No Syrup");
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