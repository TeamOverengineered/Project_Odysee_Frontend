<template>
    <div class="flex flex-grow justify-between">
        <div class="mx-16 w-full mt-16">
            <h1 class="text-4xl">Ihre Tickets</h1>
            <nuxt-link to="/tickets/create"><button class="btn rounded-md bg-base-200  hover:bg-primary-content mt-12">Neues Ticket anlegen</button></nuxt-link>
          <div class="overflow-y-auto h-[30rem] mt-12">
            <table class="border-collapse w-full">
              <thead>
              <tr>
                <th class="bg-base-200 border border-gray-300 px-4 py-2 w-72">Ticketnummer</th>
                <th class="bg-base-200 border border-gray-300 px-4 py-2 w-72">Betreff</th>
                <th class="bg-base-200 border border-gray-300 px-4 py-2 w-72">Erstelldatum</th>
                <th class="bg-base-200 border border-gray-300 px-4 py-2 w-72">Status</th>
                <th class="bg-base-200 border border-gray-300 px-4 py-2 w-72">Bearbeiter</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="ticket in ticketData" class="cursor-pointer hover:bg-primary-content" :key="ticket.id" @click="openTicket(ticket.id)">
                <td class="border border-gray-300 px-4 py-2"><div class="flex justify-between items-center">ticket{{ ticket.id }} <div v-if="ticket.new" class="h-3 w-3 bg-pink-500 rounded-full"></div></div></td>
                <td class="border border-gray-300 px-4 py-2">{{ ticket.title }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ new Date(ticket.createdAt).toLocaleDateString() }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ findStatusById(ticket.status) }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ findUserById(ticket.processorId) ? findUserById(ticket.processorId) : 'Nicht zugewiesen' }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
</template>

<script>
import apiCalls from "~/src/apiCalls.js";
import {mapStores} from "pinia";
import {useUserStore} from "~/store/user.js";
export default {
    data() {
        return {
            ticketData: []
        };
    },
  methods: {
    openTicket(id) {
      this.$router.push('/tickets/' + id)
    },
    async getUsers() {
      this.users = (await apiCalls.getUsers()).data.value
    },
    async getSelfAssignedTickets() {
      const tickets = (await apiCalls.getTickets()).data.value
      for (const ticket of tickets) {
        if (ticket.creatorId === this.userStore.userId) {
          this.ticketData.push(ticket)
        }
      }
    },
    findStatusById(id) {
      switch (id) {
        case 0:
          return 'Offen'
        case 1:
          return 'In Bearbeitung'
        case 2:
          return 'Geschlossen'
      }
    },
    findUserById(id) {
      const user = this.users.find(user => user.id === id)
      if (user) {
        return user.username
      }
    }
  },
  async created() {
    await this.getUsers()
    await this.getSelfAssignedTickets()
  },
  computed: {
    ...mapStores(useUserStore)
  }
};
</script>