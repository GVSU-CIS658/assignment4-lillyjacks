<template>
  <div
    class="baseBeverage"
    :style="{ backgroundColor: getColor() }"
  ></div>
</template>

<script setup lang="ts">
type Props = {
  type: string;
};

const props = defineProps<Props>();

const getColor = () => {
  switch (props.type) {
    case "Coffee":
      return "#65472b"; // dark brown
    case "Green Tea":
      return "#107301"; // green
    case "Black Tea":
      return "#000000"; // dark tea
    default:
      return "#ccc";
  }
};
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  /* // border-radius: 0.05em 0.05em 2.2em 2.2em; */
}
</style>