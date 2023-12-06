<template>
  <div class="flex-grow px-16 mt-5">
    <div class="bg-base-300 h-64 rounded-xl flex p-4">
      <div class=" w-2/5 flex flex-col">
        <div class="flex flex-row flex-grow">
          <div class="flex flex-col justify-between">
            <p class="text-xl w-1/3">Betreff</p>
            <p class="text-xl w-1/3">Erstelldatum</p>
            <p class="text-xl w-1/3">Status</p>
            <p class="text-xl w-1/3">Bearbeiter</p>
            <p class="text-xl w-1/3">Enddatum</p>
          </div>
          <div class="flex flex-col flex-grow justify-between">
            <input type="text" class="input h-8 ml-3 w-full focus:outline-primary-content" v-model="ticket.title" @focusout="updateTicket"/>
            <input type="text" class="input h-8 ml-3 w-full focus:outline-primary-content" disabled
                   v-model="ticket.createdAt"/>
            <select type="text" class="select select-sm max-h-8 ml-3 w-full focus:outline-primary-content" v-model="ticket.status" @focusout="updateTicket">
              <option :selected="ticket.status === 0" value="0">Offen</option>
              <option :selected="ticket.status === 1" value="1">In Bearbeitung</option>
              <option :selected="ticket.status === 2" value="2">Geschlossen</option>
            </select>
            <select type="text" class="select select-sm max-h-8 ml-3 w-full focus:outline-primary-content" v-model="ticket.processorId" @focusout="updateTicket">
              <option v-for="user in users" :key="user.id" :value="user.id" :selected="user.id === ticket.processorId">
                {{ user.username }}</option>
            </select>
            <input type="text" class="input h-8 ml-3 w-full focus:outline-primary-content" disabled v-model="ticket.closedAt"/>
          </div>
        </div>
      </div>
      <div class="w-3/5 flex pl-6 flex-row justify-between">
        <p class="text-xl">Beschreibung</p>
        <textarea v-model="ticket.description" placeholder="Hier eine ausführliche Beschreibung des Problems angeben"
                  class="textarea ml-4 textarea-bordered text-base w-full textarea-lg focus:outline-primary-content resize-none" @focusout="updateTicket"></textarea>
      </div>
    </div>
  </div>
</template>
<script>
import apiCalls from "~/src/apiCalls.js";

export default {
  props: {
    ticket: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    updateTicket() {
      if (this.ticket.status == 2) {
        this.ticket.closedAt = new Date().toISOString()
      } else {
        this.ticket.closedAt = null
      }

      this.ticket.id = this.$route.params.ticketId
      apiCalls.putTickets(this.ticket.id, this.ticket)
    },
    foo() {
      console.log(this.ticket)
    },
    async getUsers() {
      this.users = (await apiCalls.getUsers()).data.value
    },
  },
  async mounted() {
    await this.getUsers()
  }
}
</script>