<template>
  <NuxtLayout>
    <!-- Left Side - Form -->
    <CompanySignupForm />

    <!-- Right Side - Preview -->
    <SidebarPreview />
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
</script>
