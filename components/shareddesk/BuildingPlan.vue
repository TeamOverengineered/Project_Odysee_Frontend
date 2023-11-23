<template>
    <div v-for="floor in floors" :key="floor.floor">
        <ShareddeskFloorCard @clickedCard="handleEvent" :class="selectedFloor === floor.floor ? 'bg-primary-content' : ''" :floor="floor.floor" :floorName="floor.name" :occupiedDesks="floor.occupiedDesks" :maxDesks="floor.maxDesks" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedFloor: this.floors[0].floor
            }
        },
        props: {
            floors: {
                type: Array,
                required: true
            }
        },
        methods: {
            handleEvent(data) {
                this.selectedFloor = data
                this.$emit('clickedCard', data)
            }
        }
    }
</script>