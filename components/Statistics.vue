<template>
    <div class="h-full w-80 bg-base-200 p-4">
        <h2 class="text-3xl">News</h2>
        <h3 class="text-2xl text-base-content pt-2">Update Version {{ version }}</h3>
        <ul class="list-disc pl-8">
            <li>Dies</li>
            <li>Das</li>
            <li>Ananas</li>
        </ul>
        <h3 class="text-3xl pt-8">Statistiken</h3>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                version: 1.1
            }
        }
    }
</script>