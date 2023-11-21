<template>
    <div class="flex flex-col h-screen w-screen">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
</template>

<script setup>
useHead({
    htmlAttrs: [
      {'data-theme': 'light'},
      ],
    meta: [{name: "foo"}]
  });
</script>