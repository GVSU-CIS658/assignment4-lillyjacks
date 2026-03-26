<template>
  <div class="baseBeverage" :style="{'--base-color': baseColor}"></div>
</template>

<script setup lang="ts">
  import { useBeverageStore } from '../stores/beverageStore';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';

  const { currentBase } = storeToRefs(useBeverageStore());
  const baseColor = computed(() => currentBase.value.color);
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  background-color: var(--base-color);
}
</style>