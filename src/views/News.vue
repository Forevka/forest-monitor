<template>
  <div class="home-container page-container">
    <div v-for="thing in news" :key="thing.id" class="thing">
      <feed-element :id="thing.id" :description="thing.description" :author="thing.author" :title="thing.title" :image="thing.image">
      </feed-element>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FeedElement from '@/components/News/FeedElement.vue';
import axios from '../utils/axios'

export default defineComponent({
  name: 'News',
  components: {
    FeedElement,
  },
  setup() {
    return {
      news: ref([])
    }
  },
  async beforeMount() {
    await axios
      .get('/news')
      .then((response: any) => {
        console.log(response.data)
        this.news.push(...response.data);
        console.log(this.news)
      })
  }
})
</script>

<style scoped lang="stylus">
.home-container {
  .vue-element-plus-logo {
    width 50%
  }
}

.thing {
  padding: 2em;
}
</style>
