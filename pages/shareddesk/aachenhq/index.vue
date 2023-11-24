<template>
    <div class="flex">
        <ShareddeskMenu @clickedCard="handleEvent" :officeImagePath="officeImagePath" :officeName="officeName"
            :officeAddress="officeAddress" :floors="floors" />
    </div>
    <div class="flex">
        <img :src="selectedFloorImage" class="object-contain">
    </div>
    <div class="flex">
        <ShareddeskDeskInformation :officeName="officeName" :features="deskInformation.features" :deskImagePath="deskInformation.deskImagePath" :deskNumber="deskInformation.deskNumber" :floor="selectedFloor"  />
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
                    maxDesks: 5
                },
                {
                    floor: "2OG",
                    name: "Obergeschoss 2",
                    occupiedDesks: 11,
                    maxDesks: 20
                }
            ],
            deskInformation: {
                deskNumber: 1,
                deskImagePath: "/images/offices/desks/aachenhq/small.jpg",
                features: [
                'Diese gut Monitor',
                'Müll',
                'Drucker (why though?)',
                'Diverses anderes Zeug',
                'Ja schreib Simon die hässliche Fotze auch dabei'
                ]
            },
            selectedFloorImage: '/images/offices/floors/aachenhq/eg.jpg',
            selectedFloor: 'EG'
        }
    },
    methods: {
        handleEvent(data) {
            this.selectedFloorImage = '/images/offices/floors/aachenhq/' + data.toLowerCase() + '.jpg'
            this.selectedFloor = data
        }
    }
}
</script>