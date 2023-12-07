<template>
    <div class="flex">
        <ShareddeskMenu @clickedCard="handleEvent" :officeImagePath="officeImagePath" :officeName="officeName"
            :officeAddress="officeAddress" :id="id" />
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
    // floors und deskInformation von der API abholen und hardcoded shit entfernen.
    data() {
        return {
            officeImagePath: "/images/offices/aachen2.jpg",
            officeName: "Aachen HQ",
            officeAddress: "Gartenstraße 60, 52064 Aachen",
            selectedFloorImage: '/images/offices/floors/aachenhq/eg.png',
            id: "6d51585b-bffe-4790-a928-5d6f10f6236a"
        }
    },
    methods: {
        handleEvent(data) {
            this.selectedFloorImage = '/images/offices/floors/aachenhq/' + data.toLowerCase() + '.png'
            this.selectedFloor = data
        }
    }
}
</script>