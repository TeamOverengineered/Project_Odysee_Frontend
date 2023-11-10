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
      {'data-theme': 'winter'},
      ],
    meta: [{name: "foo"}]
  });
</script>