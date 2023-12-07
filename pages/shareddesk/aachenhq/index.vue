<template>
  <div class="flex">
    <ShareddeskMenu @clickedCard="handleEvent" :officeImagePath="officeImagePath" :officeName="officeName"
                    :officeAddress="officeAddress" :id="id"/>
  </div>
  <div class="flex items-center">
    <img :src="selectedFloorImage" class="h-5/6 w-5/6">
    <ShareddeskDot @clickedWorkSpace="handleWorkSpaceEvent" @click="getWorkSpace"
                   v-if="floorId === '59aedfb8-4b69-48f0-9d9b-d24576d19cb7'" v-for="workSpace in workSpacesEG"
                   :bottom="workSpace.bottom" :right="workSpace.right" :id="workSpace.id" :floors="floors"/>
    <ShareddeskDot @clickedWorkSpace="handleWorkSpaceEvent" @click="getWorkSpace"
                   v-if="floorId === 'b983c43f-4bf7-4ca9-8b99-16916509bb12'" v-for="workSpace in workSpacesFirstFloor"
                   :bottom="workSpace.bottom" :right="workSpace.right" :id="workSpace.id" :floors="floors"/>
    <ShareddeskDot @clickedWorkSpace="handleWorkSpaceEvent" @click="getWorkSpace"
                   v-if="floorId === 'f189d145-fcd7-40d0-98e7-4c6424e0f120'" v-for="workSpace in workSpacesSecondFloor"
                   :bottom="workSpace.bottom" :right="workSpace.right" :id="workSpace.id" :floors="floors"/>
  </div>
  <div class="flex w-96 justify-center items-center">
    <button class="btn hover:bg-primary-content" :disabled="!canSubmit" @click="bookWorkSpace">Diesen Platz
      buchen
    </button>
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
      officeImagePath: "/images/offices/aachen2.jpg",
      officeName: "Aachen HQ",
      officeAddress: "Gartenstraße 60, 52064 Aachen",
      selectedFloorImage: '/images/offices/floors/aachenhq/eg.png',
      id: "6d51585b-bffe-4790-a928-5d6f10f6236a",
      floorId: '59aedfb8-4b69-48f0-9d9b-d24576d19cb7',
      selectedWorkSpace: {},
      canSubmit: false,
      floors: [],
      workSpacesEG: [
        {
          bottom: 'bottom-[240px]',
          right: 'right-[860px]',
          id: '3a6d4411-6065-40ed-b334-0ccb8d6d03e8'
        },
        {
          bottom: 'bottom-[240px]',
          right: 'right-[1030px]',
          id: '3b632e59-d078-4c17-bd8d-4e66b601a8a2'
        },
        {
          bottom: 'bottom-[240px]',
          right: 'right-[1210px]',
          id: 'a5ccfb3f-4610-49c3-b370-87af40536dd2'
        },
        {
          bottom: 'bottom-[240px]',
          right: 'right-[1390px]',
          id: 'e167d6a2-288d-4887-a03a-de2330230b9b'
        }
      ],
      workSpacesFirstFloor: [
        {
          bottom: 'bottom-[240px]',
          right: 'right-[860px]',
          id: '65caa248-f047-47bb-9d58-bf7df68707db'
        },
        {
          bottom: 'bottom-[240px]',
          right: 'right-[1030px]',
          id: '6d4751e5-1da9-4a3d-9aa1-3bfd82b88da2'
        },
        {
          bottom: 'bottom-[240px]',
          right: 'right-[1210px]',
          id: 'd2a94be5-8361-4e75-b3b5-931bd855d7ba'
        },
        {
          bottom: 'bottom-[240px]',
          right: 'right-[1390px]',
          id: 'dcda04e4-3c2a-4e87-a9a1-062c6cd7b3dd'
        }
      ],
      workSpacesSecondFloor: [
        {
          bottom: 'bottom-[240px]',
          right: 'right-[860px]',
          id: '0bb86629-2cb0-43aa-8a38-b6cd31576e72'
        },
        {
          bottom: 'bottom-[240px]',
          right: 'right-[1030px]',
          id: '17fc3a37-6546-45dd-9c44-b161334fddd4'
        },
        {
          bottom: 'bottom-[240px]',
          right: 'right-[1210px]',
          id: '2d6f6ff0-47f1-4bfa-bf90-6653a00ee3da'
        },
        {
          bottom: 'bottom-[240px]',
          right: 'right-[1390px]',
          id: '3d14634d-26e1-4b71-8c56-780d8c8f02f3'
        },
        {
          bottom: 'bottom-[710px]',
          right: 'right-[1030px]',
          id: '518b6794-6726-4be1-bf15-92540df3f571'
        },
        {
          bottom: 'bottom-[710px]',
          right: 'right-[1210px]',
          id: 'bc1c9109-954a-4603-ab3f-17b14210b3cc'
        },
        {
          bottom: 'bottom-[710px]',
          right: 'right-[1390px]',
          id: 'd0a6fc6d-2b8c-4ebf-ab8b-62e051e8337b'
        }
      ]
    }
  },
  methods: {
    handleEvent(data) {
      this.selectedFloorImage = '/images/offices/floors/aachenhq/' + data.selectedFloor.toLowerCase() + '.png'
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