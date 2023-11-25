<template>
    <div class="flex">
        <ShareddeskMenu  @clickedCard="handleEvent" :officeImagePath="officeImagePath" :officeName="officeName"
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
            officeImagePath: "/images/offices/singapur.jpg",
            officeName: "Singapur",
            officeAddress: "15 Beach Road, Singapore 189677",
            floors: [
                {
                    floor: "EG",
                    name: "Erdgeschoss / Eingang",
                    occupiedDesks: 1,
                    maxDesks: 5
                },
                {
                    floor: "1OG",
                    name: "Obergeschoss 1",
                    occupiedDesks: 5,
                    maxDesks: 12
                }
            ],
            selectedFloorImage: '/images/offices/floors/singapur/eg.png',
        }
    },
    methods: {
        handleEvent(data) {
            this.selectedFloorImage = '/images/offices/floors/singapur/' + data.toLowerCase() + '.png'
        }
    }
}
</script>