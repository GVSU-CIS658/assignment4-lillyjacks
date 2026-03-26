<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />

    <Contents>
      <template #top>
        <Creamer
          v-if="currentCreamer.id !== 'c1'"
          :key="`${currentCreamer.id === 'c1' ? 'none' : 'has-cream'}`"
        />
      </template>

      <template #mid>
        <Syrup
          v-if="currentSyrup.id !== 's1'"
          :key="currentSyrup.id === 's1' ? 'none' : 'has-syrup'"
        />
      </template>

      <template #bottom>
        <Base />
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBeverageStore } from "../stores/beverageStore";

import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type Props = {
  isIced: boolean;
};

defineProps<Props>();

const beverageStore = useBeverageStore();
const { currentCreamer, currentSyrup } = storeToRefs(beverageStore);
</script>