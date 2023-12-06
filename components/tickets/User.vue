<template>
    <div class="flex flex-grow justify-between">
        <div class="mx-16 w-full mt-16">
            <h1 class="text-4xl">Tickets</h1>
            <nuxt-link to="/tickets/create"><button class="btn rounded-md bg-base-200  hover:bg-primary-content mt-12">Neues Ticket anlegen</button></nuxt-link>
            <table class="border-collapse w-full mt-12">
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
                        <td class="border border-gray-300 px-4 py-2">{{ ticket.subject }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ ticket.createDate }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ ticket.state }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ ticket.assignee }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ticketData: [
                { id: "250627_001", subject: "Diese kaputt", createDate: "25.06.2027", state: "Offen", assignee: "Nicht zugwiesen", new: true },
                { id: "250627_002", subject: "Nix gut", createDate: "25.06.2027", state: "In Bearbeitung", assignee: "Du dummer Hurensohn", new: false},
                { id: "250627_003", subject: "Komm gucken du Spast", createDate: "Geschlossen", state: "Offen", assignee: "nicht@zugewiesen.de", new: false},
                { id: "250627_004", subject: "...", createDate: "25.06.2027", state: "Offen", assignee: "Nicht zugwiesen", new: false},
                { id: "250627_005", subject: "HELP", createDate: "25.06.2027", state: "In Bearbeitung", assignee: "justin.koerner@teamoverengineered.com", new: false},
                { id: "250627_006", subject: "HALLOOOOOOOOOOO", createDate: "25.06.2027", state: "Geschlossen", assignee: "calvin@klein.com", new: false},
            ]
        };
    },
  methods: {
    openTicket(id) {
      this.$router.push('/tickets/' + id)
    }
  }
};
</script>