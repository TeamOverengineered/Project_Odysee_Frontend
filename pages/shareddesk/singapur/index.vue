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
            selectedFloor: '/images/offices/floors/singapur/eg.jpg',
        }
    },
    methods: {
        handleEvent(data) {
            this.selectedFloor = '/images/offices/floors/singapur/' + data.toLowerCase() + '.jpg'
        }
    }
}
</script>