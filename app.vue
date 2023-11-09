<template>
    <div class="flex flex-col h-screen w-screen">
      <NuxtLayout>
        <NuxtPage class="flex-auto overflow-y-scroll"/>
      </NuxtLayout>
    </div>
</template>

<script setup>
useHead({
    htmlAttrs: [
      {'data-theme': 'pastel'},
      ],
    meta: [{name: "foo"}]
  });
</script>