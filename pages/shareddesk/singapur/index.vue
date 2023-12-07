<template>
  <div class="flex">
    <ShareddeskMenu @clickedCard="handleEvent" :officeImagePath="officeImagePath" :officeName="officeName"
                    :officeAddress="officeAddress" :id="id"/>
  </div>
  <div class="flex items-center">
    <img :src="selectedFloorImage" class="h-5/6 w-5/6">
    <ShareddeskDot @clickedWorkSpace="handleWorkSpaceEvent" @click="getWorkSpace"
                   v-if="floorId === 'aee4434a-eb32-4aed-b0b7-39aa3dd36f55'" v-for="workSpace in workSpacesEG"
                   :bottom="workSpace.bottom" :right="workSpace.right" :id="workSpace.id" :floors="floors"/>
    <ShareddeskDot @clickedWorkSpace="handleWorkSpaceEvent" @click="getWorkSpace"
                   v-if="floorId === '695a5824-294f-4085-9fa5-9a0309fedcab'" v-for="workSpace in workSpacesFirstFloor"
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
      officeImagePath: "/images/offices/singapur.jpg",
      officeName: "Singapur",
      officeAddress: "15 Beach Road, Singapore 189677",
      selectedFloorImage: '/images/offices/floors/singapur/eg.png',
      id: "e84b29ca-c99b-409e-8ead-25ebcaeaa200",
      floorId: 'aee4434a-eb32-4aed-b0b7-39aa3dd36f55',
      selectedWorkSpace: {},
      canSubmit: false,
      floors: [],
      workSpacesEG: [
        {
          bottom: 'bottom-[290px]',
          right: 'right-[1180px]',
          id: '35d38dc8-0231-43b5-b63f-7c4e3695cb7a'
        },
        {
          bottom: 'bottom-[290px]',
          right: 'right-[1130px]',
          id: '7752845d-f207-4762-bde6-13aa2905f148'
        },
        {
          bottom: 'bottom-[290px]',
          right: 'right-[1080px]',
          id: '72ca7939-341d-4e7f-adb3-f973a3345a91'
        },
        {
          bottom: 'bottom-[370px]',
          right: 'right-[1180px]',
          id: 'bd2590bb-1d73-4f59-b713-9806c0a59edc'
        },
        {
          bottom: 'bottom-[370px]',
          right: 'right-[1130px]',
          id: '85efe03f-3213-4b61-9de0-e03dc9dd6497'
        },
        {
          bottom: 'bottom-[370px]',
          right: 'right-[1080px]',
          id: '070d9714-ea78-45c8-ac30-f229b37cd3de'
        },
        {
          bottom: 'bottom-[370px]',
          right: 'right-[1400px]',
          id: 'bcf88f7a-c55a-44a7-bf5e-c39d52cab96a'
        },
        {
          bottom: 'bottom-[270px]',
          right: 'right-[1400px]',
          id: '1a77a7b8-463d-4568-b83a-2395ffff75aa'
        },
        {
          bottom: 'bottom-[170px]',
          right: 'right-[1400px]',
          id: '2f4d8cb3-fa91-40b3-90b8-b3c73d5f33f2'
        },
        {
          bottom: 'bottom-[590px]',
          right: 'right-[950px]',
          id: '94bd2fec-a9a7-493a-8f04-21283ec2f03b'
        },
        {
          bottom: 'bottom-[660px]',
          right: 'right-[950px]',
          id: 'd172c90a-91d6-49a2-8419-f90562194597'
        },
        {
          bottom: 'bottom-[660px]',
          right: 'right-[1030px]',
          id: '45ecff2c-de05-4e05-aa5a-a88a126f243f'
        },
        {
          bottom: 'bottom-[590px]',
          right: 'right-[1030px]',
          id: '09efdccc-1355-421d-b192-136691c1ed29'
        },
      ],
      workSpacesFirstFloor: [
        {
          bottom: 'bottom-[170px]',
          right: 'right-[1400px]',
          id: '0724c27c-3e22-4aa7-91d2-09d40d739b0b'
        },
        {
          bottom: 'bottom-[270px]',
          right: 'right-[1400px]',
          id: '0fff39c2-be00-4973-834a-cf5c72c9570a'
        },
        {
          bottom: 'bottom-[370px]',
          right: 'right-[1400px]',
          id: '3600d36a-8c7a-455e-ab5a-908653acc808'
        },
        {
          bottom: 'bottom-[560px]',
          right: 'right-[1390px]',
          id: '3aad4158-7a69-49df-bdf6-79eb5afee60e'
        },
        {
          bottom: 'bottom-[630px]',
          right: 'right-[1390px]',
          id: '3c84c1ca-013a-41ba-b2e0-d7244a73c38b'
        },
        {
          bottom: 'bottom-[700px]',
          right: 'right-[1390px]',
          id: '3d66f5fe-93be-4aa5-9851-bb49b2bba725'
        },
        {
          bottom: 'bottom-[770px]',
          right: 'right-[1390px]',
          id: '48f056c8-b3db-4fda-9e5c-b76e47e5581f'
        },
        {
          bottom: 'bottom-[770px]',
          right: 'right-[1285px]',
          id: '5e1fa7dc-c80a-40e2-a9a6-497b09909089'
        },
        {
          bottom: 'bottom-[700px]',
          right: 'right-[1285px]',
          id: '7439b365-6e87-488b-9ce7-a5a148d424bb'
        },
        {
          bottom: 'bottom-[630px]',
          right: 'right-[1285px]',
          id: '79dc636b-eefa-4a99-b82f-23d5d12f0a78'
        },
        {
          bottom: 'bottom-[560px]',
          right: 'right-[1285px]',
          id: '98a0dacf-ce33-4b70-b0d6-82ae0cdb6abb'
        },
        {
          bottom: 'bottom-[660px]',
          right: 'right-[1030px]',
          id: 'a4fda4f1-5501-437f-accc-f6842c681a2d'
        },
        {
          bottom: 'bottom-[590px]',
          right: 'right-[1030px]',
          id: 'a6ba39ee-c241-4e26-b903-1a10590bf201'
        },
        {
          bottom: 'bottom-[660px]',
          right: 'right-[950px]',
          id: 'bbda4e6a-a621-4a46-9e6e-3a7b5e74c976'
        },
        {
          bottom: 'bottom-[590px]',
          right: 'right-[950px]',
          id: 'bfbfa969-bd5c-4035-8bdb-bf8a68dad0af'
        },
        {
          bottom: 'bottom-[390px]',
          right: 'right-[1220px]',
          id: 'c63db2a2-6453-47d5-b644-b225c2ce6cfc'
        },
        {
          bottom: 'bottom-[390px]',
          right: 'right-[1150px]',
          id: 'da9384e3-6aa5-4c17-b674-c291d99eccb9'
        },
        {
          bottom: 'bottom-[390px]',
          right: 'right-[1080px]',
          id: 'ea66bc47-a5bf-40d4-9ba5-c10da46bab19'
        },
        {
          bottom: 'bottom-[300px]',
          right: 'right-[1220px]',
          id: '875da78c-3eb4-4c4e-84b4-eff8bc817929'
        },
        {
          bottom: 'bottom-[300px]',
          right: 'right-[1150px]',
          id: '938a8b0d-3512-46b0-885a-f083dd55e21b'
        },
        {
          bottom: 'bottom-[300px]',
          right: 'right-[1080px]',
          id: '45e45648-a70e-452e-b905-e910ffaf102f'
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