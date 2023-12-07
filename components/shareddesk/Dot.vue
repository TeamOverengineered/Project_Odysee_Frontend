<template>
  <button class="rounded-full h-6 w-6 bg-black fixed focus:border-black focus:border-4" :class="[bottom, right, workSpace.status == 0 ? 'bg-green-500' : 'bg-red-500']" @click="handleEvent">

  </button>
</template>
<script>
import apiCalls from "~/src/apiCalls.js";
export default {
  data() {
    return {
      workSpace: {}
    }
  },
  props: {
    bottom: {
      type: String,
      required: true
    },
    right: {
      type: String,
      required: true
    },
    floors: {
      type: Array,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    handleEvent() {
      this.$emit('clickedWorkSpace', this.id)
    }
  },
  async mounted() {
    this.workSpace = (await apiCalls.getWorkSpaces(this.id)).data.value
  }
}
</script>