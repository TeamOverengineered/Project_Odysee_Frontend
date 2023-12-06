<template>
  <div class="p-5 bg-base-200 rounded-xl">
    <h3 class="text-2xl font-base">{{ cardName }}</h3>
    <div class="overflow-y-scroll h-96 mt-4">
      <table class="table w-full z-10">
        <thead>
        <tr class="bg-base-300 border-gray-500 z-10">
          <th class="border border-gray-500 w-40">Id</th>
          <th class="border border-gray-500 w-40">Datum</th>
          <th v-if="cardName === 'Offen'" class="border border-gray-500 w-40">Ersteller</th>
          <th v-else-if="cardName === 'In Bearbeitung'" class="border border-gray-500 w-40">Bearbeiter</th>
          <th v-else class="border border-gray-500 w-52">Geschlossen am</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="ticket in ticketData" class="bg-white cursor-pointer hover:bg-primary-content" @click="openTicket(ticket.id)">
          <td class="border border-gray-500">{{ticket.id.split('-')[0]}}</td>
          <td class="border border-gray-500">{{ ticket.createdAt.slice(0, 10) }}</td>
          <td v-if="cardName === 'Offen'" class="border border-gray-500">{{ ticket.reporter }}</td>
          <td v-else-if="cardName === 'In Bearbeitung'" class="border border-gray-500">{{ ticket.assignee }}</td>
          <td v-else class="border border-gray-500">{{ ticket.closedAt }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ticketData: {
      type: Array,
      required: true
    },
    cardName: {
      type: String,
      required: true
    },
    users : {
      type: Array,
      required: true
    }
  },
  methods: {
    openTicket(id) {
      this.$router.push('/tickets/' + id)
    }
  }
}
</script>