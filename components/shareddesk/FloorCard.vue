<template>
    <button @click="handleEvent" class="w-full border hover:bg-primary-content rounded-xl h-20 flex flex-row items-center my-1" >
        <div class="w-12 h-12 mx-4 rounded-xl bg-base-300 flex">
            <p class="text-2xl self-center mx-auto">{{ floor }}</p>
        </div>
        <div>
            <p>{{ floorName }}</p>
            <p class="flex items-center"><span class="badge rounded-full mr-2" :class="badge"></span>{{ occupiedDesks }} / {{ maxDesks }}</p>
        </div>
    </button>
</template>

<script>
    export default {
        data() {
            return {
                badge: 'badge-primary'
            }
        },
        props: {
            floor: {
                type: String,
                required: true
            },
            floorName: {
                type: String,
                required: true
            },
            occupiedDesks: {
                type: Number,
                required: true
            },
            maxDesks: {
                type: Number,
                required: true
            }
        },
        mounted() {
            const occupiedPercent = 100 / this.maxDesks * this.occupiedDesks

            if (occupiedPercent < 35) {
                this.badge = 'badge-success'
            }  else {
                this.badge = 'badge-warning'
            }

            if (this.maxDesks === this.occupiedDesks) {
                this.badge = 'badge-error'
            }
        },
        methods: {
            handleEvent() {
                this.$emit('clickedCard', this.floor)
            }
        }
    }
</script>