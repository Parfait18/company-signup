<template>
  <div class="flex items-start justify-between">
    <!-- Step 1 -->
    <div class="flex items-center flex-1">
      <div class="flex flex-col items-center">
        <div
          class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold mb-2"
        >
          1
        </div>
        <span class="text-sm text-gray-900 font-medium whitespace-nowrap">{{
          $t('steps.step1')
        }}</span>
      </div>
      <div class="flex-1 h-0.5 bg-blue-600 mx-4 mt-2"></div>
    </div>

    <!-- Step 2 -->
    <div class="flex items-center flex-1">
      <div class="flex flex-col items-center">
        <div
          class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold mb-2"
        >
          2
        </div>
        <span class="text-sm text-gray-900 font-medium whitespace-nowrap">{{
          $t('steps.step2')
        }}</span>
      </div>
      <div class="flex-1 h-0.5 bg-gray-300 mx-4 mt-2"></div>
    </div>

    <!-- Step 3 -->
    <div class="flex items-center">
      <div class="flex flex-col items-center">
        <div
          class="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-sm font-semibold mb-2"
        >
          3
        </div>
        <span class="text-sm text-gray-500 whitespace-nowrap">{{
          $t('steps.step3')
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore - defineProps is auto-imported by Nuxt 3
const props = defineProps<{
  currentStep: number;
}>();
</script>
