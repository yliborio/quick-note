<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="text-block">
    <div class="text-block__header">
      <input type="text" class="text-block__title" :placeholder="title" />
      <button class="delete-btn">🗑</button>
    </div>
    <textarea type="text" class="text-block__input" rows="1" resize="none"></textarea>
  </div>
</template>

<style scoped>
.text-block {
  background-color: #f9f9f9;
  box-sizing: border-box;
  width: fit-content;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  border: 2px solid #1fb33f;
}

.text-block__header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 2px solid #1fb33f;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: white;
  color: #fff;
}
.text-block__title {
  width: 100%;
  height: 25%;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  font-weight: 700;
  font-weight: bold;
  background-color: transparent;
  border: none;
  outline: none;
}
.text-block__input {
  min-width: 100%;
  padding: 0rem 0.5rem;
  height: 100%;
  font-size: 1rem;
  font-family: 'VT323', monospace;
  background: transparent;
  border: none;
  outline: none;

  color: #000;
}

.text-block__title::placeholder {
  color: #fff;
  font-style: italic;
}

.delete-btn {
  background: transparent;
  border: none;
  color: black;

  font-size: 20px;
  cursor: pointer;
  margin-left: auto;
}
</style>
