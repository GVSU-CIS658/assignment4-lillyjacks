<template>
  <div
    class="syrup"
    :style="{
      '--syrup-color': syrupColor
    }"
  ></div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const beverageStore = useBeverageStore();
const { currentSyrup } = storeToRefs(beverageStore);

const syrupColor = computed(() => currentSyrup.value.color);
</script>

<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;

  background: repeating-linear-gradient(
    45deg,
    var(--syrup-color),
    var(--syrup-color) 10px,
    rgb(225, 207, 149) 10px,
    rgb(225, 207, 149) 20px
  );
}
</style>