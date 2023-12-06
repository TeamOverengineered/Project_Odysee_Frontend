<template>
  <div class="flex flex-col flex-grow">
    <div class="px-16 w-full mt-16">
      <h1 class="text-4xl">Tickets</h1>
      <div class="flex flex-row justify-start items-end mt-6">
        <div class="form-control">
          <label class="label">
            <span class="label-text font-bold text-base">Von</span>
          </label>
          <input type="date" class="input input-bordered w-64 rounded-xl focus:outline-primary-content" required v-model="fromDate"/>
        </div>
        <div class="form-control ml-6">
          <label class="label">
            <span class="label-text font-bold text-base">Bis</span>
          </label>
          <input type="date" class="input input-bordered w-64 rounded-xl focus:outline-primary-content" required v-model="toDate"/>
        </div>
        <div class="form-control ml-6">
          <label class="label cursor-pointer">
            <span class="label-text mr-4 text-lg">Nur mir zugewiesene Tickets anzeigen</span>
            <input type="checkbox" checked="checked" class="checkbox" v-model="selfAssigned"/>
          </label>
        </div>
        <button @click="getTickets" class="btn rounded-full bg-base-200 ml-6 hover:bg-primary-content"><img src="/images/search.png" alt="">
        </button>
      </div>
    </div>
    <div class="px-16 mt-8 flex flex-row justify-between">
      <TicketsCard v-if="users.length > 0" :ticketData="openTickets" :users="users" cardName="Offen"/>
      <TicketsCard v-if="users.length > 0" :ticketData="pendingTickets" :users="users" cardName="In Bearbeitung"/>
      <TicketsCard v-if="users.length > 0" :ticketData="closedTickets" :users="users" cardName="Geschlossen"/>
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
      fromDate: '',
      toDate: '',
      selfAssigned: false,
      openTickets: [],
      pendingTickets: [],
      closedTickets: [],
      users: []
    }
  },
  methods: {
    async getTickets() {
      let tickets = (await apiCalls.getTickets()).data.value

      this.openTickets = []
      this.pendingTickets = []
      this.closedTickets = []

      if (this.selfAssigned) {
        tickets = this.findAssignedTickets(tickets, this.userStore.userId)
      }

      if (this.fromDate && this.toDate) {
        tickets = this.findTicketsinDate(tickets, this.fromDate, this.toDate)
      }

      tickets.forEach(ticket => {
        ticket.reporter = this.findUser(ticket.creatorId) ? this.findUser(ticket.creatorId) : 'Nicht zugewiesen'
        ticket.assignee = this.findUser(ticket.processorId) ? this.findUser(ticket.processorId) : 'Nicht zugewiesen'
        switch (ticket.status) {
          case 0:
            this.openTickets.push(ticket)
            break
          case 1:
            this.pendingTickets.push(ticket)
            break
          case 2:
            this.closedTickets.push(ticket)
            break
        }
      })
    },
    async getUsers() {
      this.users = (await apiCalls.getUsers()).data.value
    },
    findUser(id) {
      const user = this.users.find(user => user.id === id)
      if (user) {
        return user.username
      }
    },
    findTicketsinDate(tickets, fromDate, toDate) {
      return tickets.filter(ticket => {
        const date = new Date(ticket.createdAt)
        return date >= new Date(fromDate) && date <= new Date(toDate)
      })
    },
    findAssignedTickets(tickets, user) {
      return tickets.filter(ticket => {
        return ticket.processorId === user
      })
    }
  },
  computed: {
    ...mapStores(useUserStore)
  },
  async created() {
    await this.getUsers()
    await this.getTickets()
  }
}
</script>