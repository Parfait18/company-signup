<template>
  <div>
    <!-- Progress Steps - Circles and Lines -->
    <div class="flex items-center mb-6 w-10/12 mx-auto">
      <!-- Step 1 -->
      <div class="flex flex-col items-center">
        <div
          class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold"
        >
          1
        </div>
      </div>
      <!-- Line 1-2 -->
      <div class="flex-1 h-0.5 bg-blue-600 mx-4"></div>

      <!-- Step 2 -->
      <div class="flex flex-col items-center">
        <div
          class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold"
        >
          2
        </div>
      </div>
      <!-- Line 2-3 -->
      <div class="flex-1 h-0.5 bg-gray-200 mx-4"></div>

      <!-- Step 3 -->
      <div class="flex flex-col items-center">
        <div
          class="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center text-sm font-semibold"
        >
          3
        </div>
      </div>
    </div>

    <!-- Step Labels -->
    <div class="flex items-center text-sm">
      <div class="flex flex-col items-center">
        <span class="text-gray-900 font-medium">{{ $t('steps.step1') }}</span>
      </div>
      <div class="flex-1 mx-4"></div>
      <div class="flex flex-col items-center">
        <span class="text-gray-900 font-medium">{{ $t('steps.step2') }}</span>
      </div>
      <div class="flex-1 mx-4"></div>
      <div class="flex flex-col items-center">
        <span class="text-gray-500">{{ $t('steps.step3') }}</span>
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
