<template>
    <div class="flex">
        <ShareddeskMenu @clickedCard="handleEvent" :officeImagePath="officeImagePath" :officeName="officeName"
            :officeAddress="officeAddress" :id="id"/>
    </div>
    <div class="flex items-center">
        <img :src="selectedFloorImage" class="h-5/6 w-5/6">
    </div>
    <div class="flex">
        
    </div>
</template>

<script>
import apiCalls from "~/src/apiCalls.js";
definePageMeta({
    layout: 'desk'
})

export default {
    data() {
        return {
            officeImagePath: "/images/offices/aachen.jpg",
            officeName: "Aachen 2",
            officeAddress: "Pontstr. 121, 52062 Aachen",
            selectedFloorImage: '/images/offices/floors/aachen/eg.png',
            id: "292c8467-484c-4ceb-8f67-74e3ddde6710"
        }
    },
    methods: {
        handleEvent(data) {
            this.selectedFloorImage = '/images/offices/floors/aachen/' + data.toLowerCase() + '.png'
        }
    }
}
</script>