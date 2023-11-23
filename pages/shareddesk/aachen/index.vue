<template>
    <div class="flex">
        <ShareddeskMenu @clickedCard="handleEvent" :officeImagePath="officeImagePath" :officeName="officeName"
            :officeAddress="officeAddress" :floors="floors" />
    </div>
    <div class="flex">
        <img :src="selectedFloor" class="object-contain">
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
            selectedFloor: '/images/offices/floors/aachen/eg.jpg',
        }
    },
    methods: {
        handleEvent(data) {
            this.selectedFloor = '/images/offices/floors/aachen/' + data.toLowerCase() + '.jpg'
        }
    }
}
</script>