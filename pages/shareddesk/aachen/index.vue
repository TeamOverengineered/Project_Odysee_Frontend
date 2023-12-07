<template>
  <div class="flex">
    <ShareddeskMenu @clickedCard="handleEvent" :officeImagePath="officeImagePath" :officeName="officeName"
                    :officeAddress="officeAddress" :id="id"/>
  </div>
  <div class="flex items-center">
    <img :src="selectedFloorImage" class="h-5/6 w-5/6">
    <ShareddeskDot @clickedWorkSpace="handleWorkSpaceEvent" @click="getWorkSpace"
                   v-if="floorId === 'c307ac34-2490-441c-92b9-a7f281aa4cff'" v-for="workSpace in workSpacesEG"
                   :bottom="workSpace.bottom" :right="workSpace.right" :id="workSpace.id" :floors="floors"/>
  </div>
  <div class="flex w-96 justify-center items-center">
    <button class="btn hover:bg-primary-content" :disabled="!canSubmit" @click="bookWorkSpace">Diesen Platz
      buchen
    </button>
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
      id: "292c8467-484c-4ceb-8f67-74e3ddde6710",
      floorId: 'c307ac34-2490-441c-92b9-a7f281aa4cff',
      selectedWorkSpace: {},
      canSubmit: false,
      floors: [],
      workSpacesEG: [
        {
          bottom: 'bottom-[240px]',
          right: 'right-[950px]',
          id: '048c4782-9979-4890-9a19-285038a36f62'
        },
        {
          bottom: 'bottom-[240px]',
          right: 'right-[1015px]',
          id: '57a06d43-bbef-4e0f-bf12-6b2baed57915'
        },
        {
          bottom: 'bottom-[430px]',
          right: 'right-[1015px]',
          id: '586c8c76-472f-45d7-8db7-0508f3dd07f6'
        },
        {
          bottom: 'bottom-[430px]',
          right: 'right-[950px]',
          id: '6544d7fd-9f94-456c-8828-31c40da47305'
        },
        {
          bottom: 'bottom-[640px]',
          right: 'right-[1195px]',
          id: '6f6f1cf7-579a-4b0a-8d6b-1dc0b9b2866b'
        },
        {
          bottom: 'bottom-[640px]',
          right: 'right-[1035px]',
          id: '7226798f-8462-469b-8cfb-35df57813904'
        },
        {
          bottom: 'bottom-[720px]',
          right: 'right-[1035px]',
          id: 'd2a861e1-ca4a-45f2-9224-b8e5641bc285'
        },
        {
          bottom: 'bottom-[720px]',
          right: 'right-[1195px]',
          id: 'd36f655a-3d40-466c-a243-77a781b70c75'
        },
        {
          bottom: 'bottom-[510px]',
          right: 'right-[1475px]',
          id: 'e497d477-22db-4a07-b391-a7b634670423'
        },
        {
          bottom: 'bottom-[260px]',
          right: 'right-[1475px]',
          id: 'fdba4ef9-824c-4046-b1ed-9dd7a0c0cbab'
        }
      ]
    }
  },
  methods: {
    handleEvent(data) {
      this.selectedFloorImage = '/images/offices/floors/singapur/' + data.selectedFloor.toLowerCase() + '.png'
      this.floorId = data.selectedFloorId
    },
    handleWorkSpaceEvent(data) {
      this.selectedWorkSpaceId = data
    },
    bookWorkSpace() {
      apiCalls.putWorkSpaces(this.selectedWorkSpace.id, {
        id: this.selectedWorkSpace.id,
        floorId: this.floorId,
        status: 1
      }).then(() => {
        location.reload()
      })
    },
    async getWorkSpace() {
      this.selectedWorkSpace = (await apiCalls.getWorkSpaces(this.selectedWorkSpaceId)).data.value
      this.canSubmit = this.selectedWorkSpace.status == 0;
    }
  },
  async mounted() {
    this.floors = (await apiCalls.getFloors()).data.value
  }
}
</script>