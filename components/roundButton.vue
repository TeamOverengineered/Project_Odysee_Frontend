<template>
    <button class="btn btn-circle hover:bg-base-100 hover:border-gray-400 relative"><img :src="`/images/${image}`" alt="">
        <div v-if="notification" class="absolute rounded-full bg-pink-500 -top-1 -right-2 w-5 h-5 mx-1"></div>
    </button>
</template>

<script>
    export default {
        data() {
            return {
                notification: this.notifications > 0
            }
        },
        props: {
            image: {
                type: String,
                default: '/images/toelogo.png.svg'
            },
            notifications: {
                type: Number,
                default: 0
            }
        }
    }
</script>