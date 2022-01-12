<template>
  <div>
    {{ test.value }}
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import { useTest } from "~/store/test";
const test = useTest()
</script>