<template>
    <Lviv>
    </Lviv>
</template>

<script lang="ts">
import Lviv from '@/components/ForestMap/Lviv.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Lviv
  },
  name: 'Home',
})
</script>

<style scoped lang="stylus">
.home-container {
  .vue-element-plus-logo {
    width 50%
  }
}
</style>
