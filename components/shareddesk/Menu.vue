<template>
  <div class="w-72 bg-base-200 flex flex-col">
    <div class="mx-2">
      <ul class="items-center">
        <nuxt-link to="/shareddesk">
          <li class="flex items-center text-xl border-t-0 h-12">
            <img src="/images/arrow-left.png" alt="shareddesk" class="mr-2">Zurück zur Übersicht
          </li>
        </nuxt-link>
        <li>
          <img :src="officeImagePath" alt="" class="rounded-xl w-60 mx-auto mt-4">
        </li>
      </ul>
      <p class="text-2xl">{{ officeName }}</p>
      <p class="text-gray-500">{{ officeAddress }}</p>
    </div>
    <hr class="border-base-300 mt-2">
    <div class="mx-auto mt-4">
      <button @click="toggleMenu('buildingMenu')" :class="buildingMenu ? 'bg-primary-content' : ''"
              class="rounded-full border mr-4 p-1 bg-base-300 hover:bg-primary-content">
        Gebäudeplan
      </button>
      <button @click="toggleMenu('infoMenu')" :class="infoMenu ? 'bg-primary-content' : ''"
              class="rounded-full border p-1 bg-base-300 hover:bg-primary-content">
        Informationen
      </button>
    </div>
    <ShareddeskInformation v-if="infoMenu" class="mx-2 mt-4"/>
    <ShareddeskBuildingPlan @clickedCard="handleEvent" v-if="buildingMenu" class="mx-2 mt-4" :id="id"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoMenu: false,
      buildingMenu: true,
    }
  },
  props: {
    officeName: {
      type: String,
      required: true
    },
    officeAddress: {
      type: String,
      required: true
    },
    officeImagePath: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleMenu(menu) {
      switch (menu) {
        case 'buildingMenu':
          this.infoMenu = false
          this.buildingMenu = !this.buildingMenu
          break
        case 'infoMenu':
          this.buildingMenu = false
          this.infoMenu = !this.infoMenu
      }
    },
    handleEvent(data) {
      this.$emit('clickedCard', data)
    }
  }
}
</script>