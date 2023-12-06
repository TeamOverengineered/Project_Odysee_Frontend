<template>
  <div class="flex flex-row flex-grow">
    <div class="pl-16 pr-9 w-2/3 mt-8">
      <div class="bg-base-300 h-96 rounded-xl flex flex-col px-4 py-3 mb-14">
        <h3 class="text-xl">Kommentare</h3>
        <div class="w-full bg-base-100 mt-2 px-4 h-full rounded-xl overflow-auto">
          <TicketsDetailsComment :comments="comments"/>
        </div>
      </div>
    </div>
    <div class="pr-16 w-1/3 mt-8">
      <div class="bg-base-300 h-96 rounded-xl flex flex-col p-4 mb-14">
        <h3 class="text-xl">Neuen Kommentar verfassen</h3>
        <textarea v-model="comment"  placeholder="Hier eine ausführliche Beschreibung des Problems angeben"
                    class="textarea  textarea-bordered text-base w-full h-full mt-3 mb-2 textarea-lg focus:outline-primary-content resize-none"></textarea>
        <div class="flex justify-end">
          <button @click="addComment" class="btn rounded-md bg-base-200 hover:bg-primary-content min-h-6 h-9">Senden</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapStores} from "pinia";
import {useUserStore} from "~/store/user";
export default {
  props: {
    ticket: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      comment: '',
      comments: {}
    }
  },
  methods: {
    addComment() {
      this.comments.push(
          {
            user: this.userStore.userName,
            text: this.comment,
            sent: new Date().toLocaleTimeString().slice(0, 5),
          }
      )
    },
    async getComments() {

    }
  },
  computed: {
    ...mapStores(useUserStore),
  }
}
</script>