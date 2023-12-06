<template>
  <div class="flex flex-grow justify-between">
    <div class="mx-16 w-full mt-16">
      <h1 class="text-4xl">Willkommen, {{ loggedInUser }}</h1>
      <nuxt-link to="/shareddesk"><button class="btn rounded-md bg-base-200 hover:bg-primary-content mt-12">Platz buchen</button></nuxt-link>
      <h2 class="text-2xl mt-12">Offene Tickets</h2>
      <div class="overflow-y-auto h-96">
        <table class="border-collapse w-full overflow-auto">
          <thead>
          <tr>
            <th class="bg-base-200 border border-gray-300 px-4 py-2 w-72">Ticket-ID</th>
            <th class="bg-base-200 border border-gray-300 px-4 py-2 w-72">Betreff</th>
            <th class="bg-base-200 border border-gray-300 px-4 py-2 w-72">Bearbeiter</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="ticket in ticketData" :key="ticket.id">
            <td class="border border-gray-300 px-4 py-2">{{ ticket.id }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ ticket.title }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ findUser(ticket.processorId) ? findUser(ticket.processorId) : 'Nicht zugewiesen' }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '~/store/user';
import { mapStores } from 'pinia';
import apiCalls from "~/src/apiCalls.js";

export default {
    data() {
        return {
            loggedInUser: '',
            ticketData: [],
          users: []
        };
    },
    computed: {
        ...mapStores(useUserStore),
    },
    methods: {
      findUser(id) {
        const user = this.users.find(user => user.id === id)
        if (user) {
          return user.username
        }
      }
    },
    async created() {
        this.loggedInUser = this.userStore.userName
        this.ticketData = (await apiCalls.getTickets()).data.value
      this.users = (await apiCalls.getUsers()).data.value
    }
};
</script>