<template>
    <div v-for="floor in floors" :key="floor.floor">
        <ShareddeskFloorCard :floor="floor.floor" :floorName="floor.name" :occupiedDesks="floor.occupiedDesks" :maxDesks="floor.maxDesks" />
    </div>
</template>

<script>
    export default {
        props: {
            floors: {
                type: Array,
                required: true
            }
        }
    }
</script>