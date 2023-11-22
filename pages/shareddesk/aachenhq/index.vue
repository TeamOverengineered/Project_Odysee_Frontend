<template>
    <ShareddeskMenu :officeImagePath="officeImagePath" :officeName="officeName" :officeAddress="officeAddress" :floors="floors"/>
</template>

<script>
definePageMeta({
    layout: 'desk'
})

export default {
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
            ]
        }
    }
}
</script>