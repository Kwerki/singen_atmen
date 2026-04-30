<template>
  <div class="svg-logo" v-html="svgContent"></div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const route = useRoute();

const logoFiles = {
  atmen: () => import('@/assets/logos/header_atmen.svg?raw'),
  klavier: () => import('@/assets/logos/header_klavier.svg?raw'),
  singen: () => import('@/assets/logos/header_singen.svg?raw'),
  sprechen: () => import('@/assets/logos/header_sprechen.svg?raw'),
  home: () => import('@/assets/logos/header_home.svg?raw')
};

const svgContent = ref('');

const loadLogo = async () => {
  const loader = logoFiles[props.name] || logoFiles.home;
  try {
    const module = await loader();
    svgContent.value = module.default;
  } catch (e) {
    console.error('Failed to load logo:', e);
  }
};

loadLogo();
</script>

<style scoped>
.svg-logo {
  display: inline-block;
  width: 100%;
  height: auto;
}

.svg-logo :deep(svg) {
  width: 100%;
  height: auto;
}
</style>