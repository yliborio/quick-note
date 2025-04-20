<script setup lang="ts">
import { blocksStore } from '@/stores/blocks'

const { newBlock, saveLocally } = blocksStore()
</script>

<template>
  <div class="container">
    <div class="title">
      <h1>Quick Note</h1>
    </div>
    <div class="actions">
      <button class="action-btn" @click="newBlock">+ New Block</button>
      <button class="action-btn" @click="saveLocally">💾 Save All</button>
      <button class="action-btn">⇧ Import</button>
      <button class="action-btn">⇩ Export</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 1rem;
  border: 3px dashed #ccc;

  background-color: #f0f0f0;
  width: 100vw;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
}

.title {
  font-size: 2rem;
  width: 100%;
  font-weight: bold;
  margin-bottom: 1rem;
  padding: 0 1rem;
  border-bottom: 3px dashed #ccc;
}

.actions {
  display: flex;
  width: 100%;
  gap: 1rem;

  padding: 0 1rem;
  padding-bottom: 1rem;
}
.action-btn {
  width: 100px;
}
</style>
