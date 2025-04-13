<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer-left">
      <span>⌘ Quick Note </span>
      <span>— All notes saved locally</span>
    </div>
    <div class="footer-right">
      <a href="https://github.com/yliborio/quick-note" target="_blank">View Source</a>
      <span class="blinking-cursor">█</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-family: 'VT323', monospace;
  font-size: 1rem;
  color: #00ffcc;
  background-color: #0d0d0d;
  border-top: 1px dashed #333;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.footer a {
  color: #ff4ecf;
  text-decoration: none;
  margin-left: 1rem;
}

.blinking-cursor {
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
