<template>
    <div class="flex">
        <ShareddeskMenu @clickedCard="handleEvent" :officeImagePath="officeImagePath" :officeName="officeName"
            :officeAddress="officeAddress" :floors="floors" />
    </div>
    <div class="flex items-center">
        <img :src="selectedFloorImage" class="h-5/6 w-5/6">
    </div>
    <div class="flex">
        
    </div>
</template>

<script>
definePageMeta({
    layout: 'desk'
})

export default {
    data() {
        return {
            officeImagePath: "/images/offices/aachen.jpg",
            officeName: "Aachen 2",
            officeAddress: "Pontstr. 121, 52062 Aachen",
            floors: [
                {
                    floor: "EG",
                    name: "Erdgeschoss / Eingang",
                    occupiedDesks: 1,
                    maxDesks: 16
                }
            ],
            selectedFloorImage: '/images/offices/floors/aachen/eg.png',
        }
    },
    methods: {
        handleEvent(data) {
            this.selectedFloorImage = '/images/offices/floors/aachen/' + data.toLowerCase() + '.png'
        }
    }
}
</script>