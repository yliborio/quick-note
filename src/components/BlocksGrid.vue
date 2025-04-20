<script setup lang="ts">
import { blocksStore } from '@/stores/blocks'
import TextBlock from './TextBlock.vue'
import { onMounted } from 'vue'

const { blocks, loadLocally } = blocksStore()

onMounted(() => {
  loadLocally()
})
</script>

<template>
  <div class="block-grid">
    <TextBlock
      v-for="block in blocks"
      :key="block.title + block.id"
      :id="block.id"
      :title="block.title"
      :content="block.content"
    />
  </div>
</template>

<style scoped>
.block-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
  max-width: 1200px;
}
</style>
