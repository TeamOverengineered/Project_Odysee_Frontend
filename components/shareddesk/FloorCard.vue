<template>
    <div class="w-full border border-primary rounded-xl h-20 flex flex-row justify-around items-center">
        <div class="w-12 h-12 rounded-xl bg-base-300 flex">
            <p class="text-2xl self-center mx-auto">{{ floor }}</p>
        </div>
        <div>
            <p>{{ floorName }}</p>
            <p class="flex items-center"><span class="badge rounded-full mr-2" :class="badge"></span>{{ occupiedDesks }} / {{ maxDesks }}</p>
        </div>
    </div>
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
            const percent = 100 / this.maxDesks * this.occupiedDesks

            if (percent < 20) {
                this.badge = 'badge-success'
            }  else {
                this.badge = 'badge-warning'
            }

            if (this.maxDesks === this.occupiedDesks) {
                this.badge = 'badge-error'
            }

            console.log(this.badge)
        }
    }
</script>