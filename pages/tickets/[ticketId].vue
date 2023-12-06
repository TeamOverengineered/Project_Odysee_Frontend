<template>
  <div class="flex flex-col flex-grow justify-around">
    <div class="px-16 w-full mt-8">
      <h1 class="text-4xl">Ticket {{ ticketId }}</h1>
    </div>
    <div class="flex">
      <TicketsDetailsInformation :ticket="ticket"/>
    </div>
    <div class="flex flex-row">
      <TicketsDetailsComments :ticket="ticket" />
    </div>
  </div>
</template>
<script>
import apiCalls from "~/src/apiCalls.js";
export default {
  data() {
    return {
      ticket: {},
      ticketId: ''
    }
  },
  methods: {
    async getTicket() {
      this.ticket = (await apiCalls.getTickets(this.$route.params.ticketId)).data.value
      this.ticketId = this.ticket.id.split('-')[0]
    }
  },
  async created() {
    await this.getTicket()
  }
}
</script>