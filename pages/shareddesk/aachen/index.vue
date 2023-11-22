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
            ]
        }
    }
}
</script>