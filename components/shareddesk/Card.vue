<template>
    <div class="card w-96 h-1/2 bg-base-300 shadow-xl rounded-sm">
        <figure>
            <img :src="imagePath" :alt="alt" class="h-64 w-full overflow-x"/>
            <p class="absolute top-0 left-0 bg-base-content bg-opacity-80 p-2 m-1 rounded-md text-base-100"><span>Freie Plätze: {{ freeSpaces }}</span></p>
        </figure>
        <div class="card-body h-48">
            <h2 class="card-title">{{ title }}</h2>
            <p>{{ description }}</p>
            <nuxt-link :to="url" class="self-end"><img src="/images/arrow-right.png" alt=""></nuxt-link>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            imagePath: {
                type: String,
                required: true
            },
            alt: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
            freeSpaces: {
                type: Number,
                required: true
            }
        }
    }
</script>