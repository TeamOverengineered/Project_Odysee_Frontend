<template>
  <div class="flex flex-row flex-grow">
    <div class="pl-16 pr-9 w-2/3 mt-8">
      <div class="bg-base-300 h-96 rounded-xl flex flex-col px-4 py-3 mb-14">
        <h3 class="text-xl">Kommentare</h3>
        <div class="w-full bg-base-100 mt-2 px-4 h-full rounded-xl overflow-auto">
          <div v-for="comment in comments" class=chat
               :class="this.userStore.userId === comment.userId ? 'chat-end' : 'chat-start'">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component"
                     :src="'/images/users/' + this.userStore.userId + '/profil.jpg' "/>
              </div>
            </div>
            <div class="chat-header">
              {{ findUserById(comment.userId) }}
              <span class="text-xs opacity-50">{{ new Date(comment.createdAt).toLocaleString() }}</span>
            </div>
            <div class="chat-bubble text-black"
                 :class="this.userStore.userId === comment.userId ? 'bg-primary-content' : 'bg-base-300'">{{ comment.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pr-16 w-1/3 mt-8">
      <div class="bg-base-300 h-96 rounded-xl flex flex-col p-4 mb-14">
        <h3 class="text-xl">Neuen Kommentar verfassen</h3>
        <textarea v-model="comment"  placeholder="Hier eine ausführliche Beschreibung des Problems angeben"
                    class="textarea  textarea-bordered text-base w-full h-full mt-3 mb-2 textarea-lg focus:outline-primary-content resize-none"></textarea>
        <div class="flex justify-end">
          <button @click="addComment" class="btn rounded-md bg-base-200 hover:bg-primary-content min-h-6 h-9" :disabled="!canSubmit">Senden</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapStores} from "pinia";
import {useUserStore} from "~/store/user";
import apiCalls from "~/src/apiCalls.js";
import guidGenerator from "~/src/guidGenerator.js";
export default {
  data() {
    return {
      users: [],
      comments: [],
      comment: '',
    }
  },
  methods: {
    addComment() {
      const ticket = {
        id: guidGenerator.generateUuid(),
        userId: this.userStore.userId,
        ticketId: this.$route.params.ticketId,
        createdAt: new Date().toISOString(),
        content: this.comment
      }
      apiCalls.postMessages(ticket).then(() => {
        this.comment = ''
        this.comments.push(ticket)
      })
    },
    async getComments() {
      this.comments = (await apiCalls.getMessagesByTicketId(this.$route.params.ticketId)).data.value
      this.comments.sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt)
      })
    },
    async getUsers() {
      this.users = (await apiCalls.getUsers()).data.value
    },
    findUserById(id) {
      const user = this.users.find(user => user.id === id)
      if (user) {
        return user.username
      }
    }
  },
  computed: {
    ...mapStores(useUserStore),
    canSubmit() {
      return this.comment
    }
  },
  async mounted() {
    await this.getComments()
    await this.getUsers()
  }
}
</script>