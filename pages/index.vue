<template>
  <NuxtLayout>
    <!-- Form (visible on all screens, appears first on mobile) -->
    <CompanySignupForm />

    <!-- Preview Sidebar (hidden on mobile, visible on desktop) -->
    <SidebarPreview />
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
</script>
