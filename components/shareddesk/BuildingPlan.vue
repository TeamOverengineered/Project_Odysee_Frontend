<template>
  <div v-for="floor in floors" :key="floor.floor">
    <ShareddeskFloorCard @clickedCard="handleEvent" :class="selectedFloor === floor.level ? 'bg-primary-content' : ''"
                         :floor="floor.level" :floorName="floor.name" :occupiedDesks="floor.spacesOccupied"
                         :maxDesks="floor.spacesTotal"/>
  </div>
</template>

<script>
import apiCalls from "~/src/apiCalls.js";
export default {
  data() {
    return {
      floors: [],
      selectedFloor: '',
      selectedFloorId: '',
      workspaces: []
    }
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    handleEvent(data) {
      this.selectedFloor = data
      for (const floor of this.floors) {
        if (floor.level === data) {
          this.selectedFloorId = floor.id
        }
      }
      this.$emit('clickedCard', {selectedFloor: data, selectedFloorId: this.selectedFloorId})
    }
  },
  async mounted() {
    //get floors and assign them to variable
    const floors = (await apiCalls.getFloors()).data.value
    for (const floor of floors) {
      if (floor.buildingID === this.id) {
        this.floors.push(floor)
      }
    }

    for (const floor of this.floors) {
      if (floor.level === 'EG') {
        //place selected floor at beginning of the array
        this.floors.splice(0, 0, this.floors.splice(this.floors.indexOf(floor), 1)[0])
      }
    }
    this.selectedFloor = this.floors[0].level

    //get workspaces and assign them to variable
    const workspaces = (await apiCalls.getWorkSpaces()).data.value
    for (const floor of this.floors) {
      floor.spacesOccupied = 0
      for (const workspace of workspaces) {
        if (workspace.floorId === floor.id) {
          this.workspaces.push(workspace)
          if (workspace.status == 1) {
            floor.spacesOccupied++
          }
        }
      }
    }
  }
}
</script>