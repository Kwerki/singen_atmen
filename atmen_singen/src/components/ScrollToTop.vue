<template>
  <transition name="fade">
    <button
      v-if="visible"
      class="scroll-top-btn"
      @click="scrollToTop"
      aria-label="Nach oben scrollen"
    >
      <v-icon size="24">mdi-chevron-up</v-icon>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);

const handleScroll = () => {
  visible.value = window.scrollY > 400;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fdf3e3, #fff3d6);
  border: 1.5px solid rgba(232, 201, 122, 0.5);
  box-shadow: 0 4px 16px rgba(201, 123, 42, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c97b2a;
  z-index: 100;
  transition: all 0.3s ease;
}

.scroll-top-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(201, 123, 42, 0.3);
}

.scroll-top-btn:active {
  transform: scale(0.95);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>