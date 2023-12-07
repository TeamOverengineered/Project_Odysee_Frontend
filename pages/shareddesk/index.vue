<template>
  <h1 class="text-4xl mx-16 mt-16 fixed">Shared Desk</h1>
  <div id="cards" class="grid grid-cols-3 w-full mx-28 items-center">
    <div v-for="card in cards" class="mx-auto">
      <ShareddeskCard :imagePath="card.imagePath" :alt="card.alt" :title="card.title" :description="card.description"
                      :freeSpaces="card.freeSpaces" :url="card.url" class="mx-6"/>
    </div>
  </div>
</template>

<script>
import apiCalls from "~/src/apiCalls.js";

export default {
  data() {
    return {
      floors: [],
      workspaces: [],
      cards: {
        hqaachen: {
          id: "6d51585b-bffe-4790-a928-5d6f10f6236a",
          imagePath: "images/offices/aachen2.jpg",
          alt: "Aachen Office HQ",
          title: "Aachen HQ",
          description: "This is where the magic happens.",
          url: "/shareddesk/aachenhq",
          freeSpaces: 0
        },
        singapur: {
          id: "e84b29ca-c99b-409e-8ead-25ebcaeaa200",
          imagePath: "images/offices/singapur.jpg",
          alt: "Singapur Office",
          title: "Singapur",
          description: "Dicks may be small here, but our offices sure are not.",
          url: "/shareddesk/singapur",
          freeSpaces: 3
        },
        aachen: {
          id: "292c8467-484c-4ceb-8f67-74e3ddde6710",
          imagePath: "images/offices/aachen.jpg",
          alt: "Aachen Office",
          title: "Aachen",
          description: "Because one office is not enough.",
          url: "/shareddesk/aachen",
          freeSpaces: 5
        }
      }
    }
  },
  methods: {
    countFreeSpaces(buildingId) {
      let freeSpaces = 0;
      for (const workspace of this.workspaces) {
        for (const floor of this.floors) {
          if (workspace.floorId === floor.id && floor.buildingID === buildingId) {
            if (workspace.status == 0) {
              freeSpaces++;
            }
          }
        }
      }
      return freeSpaces
    },
  },
  async mounted() {
    this.workspaces = (await apiCalls.getWorkSpaces()).data.value
    this.floors = (await apiCalls.getFloors()).data.value;
    this.cards.hqaachen.freeSpaces = this.countFreeSpaces(this.cards.hqaachen.id);
    this.cards.singapur.freeSpaces = this.countFreeSpaces(this.cards.singapur.id);
    this.cards.aachen.freeSpaces = this.countFreeSpaces(this.cards.aachen.id);
  }
}
</script>