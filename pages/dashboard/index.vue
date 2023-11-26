<template>
    <div class="flex flex-grow justify-between">
        <div class="mx-16 w-full mt-16">
            <h1 class="text-4xl">Willkommen, {{ loggedInUser }}</h1>
            <button class="btn rounded-md bg-base-200 border-gray-400 hover:bg-primary-content mt-12">Platz buchen</button>
            <h2 class="text-2xl mt-12">Offene Tickets</h2>
            <table class="border-collapse w-full">
                <thead>
                    <tr>
                        <th class="bg-base-200 border border-gray-300 px-4 py-2 w-72">Ticket-ID</th>
                        <th class="bg-base-200 border border-gray-300 px-4 py-2 w-72">Betreff</th>
                        <th class="bg-base-200 border border-gray-300 px-4 py-2 w-72">Kunden E-Mail</th>
                        <th class="bg-base-200 border border-gray-300 px-4 py-2 w-72">Supporter-ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ticket in ticketData" :key="ticket.id">
                        <td class="border border-gray-300 px-4 py-2">{{ ticket.id }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ ticket.subject }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ ticket.email }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ ticket.supporterId }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex justify-end">
                <button class="btn rounded-md bg-base-200 border-gray-400 hover:bg-primary-content mt-8">Alle Tickets</button>
            </div>
        </div>
        <Statistics />
    </div>
</template>

<script>
import { useUserStore } from '~/store/user';
import { mapStores } from 'pinia';

export default {
    data() {
        return {
            loggedInUser: '',
            ticketData: [
                { id: "1", subject: "Meld dich du Spast", email: "erzfeind@gmx.de", supporterId: "12345" },
                { id: "2", subject: "Meld dich du Spast", email: "erzfeind@gmx.de", supporterId: "12345" },
                { id: "3", subject: "Meld dich du Spast", email: "erzfeind@gmx.de", supporterId: "12345" },
                { id: "4", subject: "Meld dich du Spast", email: "erzfeind@gmx.de", supporterId: "12345" },
                { id: "4", subject: "Meld dich du Spast", email: "erzfeind@gmx.de", supporterId: "12345" },
            ]
        };
    },
    computed: {
        ...mapStores(useUserStore),
    },
    mounted() {
        this.loggedInUser = this.userStore.userName
    }
};
</script>