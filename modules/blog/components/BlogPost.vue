<template>
  <div>
    {{ blog }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  blog: {
    type: String,
    required: true
  }
})
</script>