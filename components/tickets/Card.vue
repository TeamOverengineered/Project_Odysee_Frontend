<template>
    <div class="p-5 bg-base-200 rounded-xl">
        <h3 class="text-2xl font-base">{{ cardName }}</h3>
        <div class="overflow-y-scroll h-96 mt-4">
            <table class="table w-full z-10">
                <thead>
                    <tr class="bg-base-300 border-gray-500 z-10">
                        <th class="border border-gray-500">Id</th>
                        <th class="border border-gray-500">Datum</th>
                        <th v-if="cardName === 'Offen'" class="border border-gray-500">Ersteller</th>
                        <th v-else-if="cardName === 'In Bearbeitung'" class="border border-gray-500">Bearbeiter</th>
                        <th v-else class="border border-gray-500">Geschlossen am</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ticket in ticketData" class="bg-white">
                        <td class="border border-gray-500">{{ ticket.id }}</td>
                        <td class="border border-gray-500">{{ ticket.createDate }}</td>
                        <td v-if="cardName === 'Offen'" class="border border-gray-500">{{ ticket.reporter }}</td>
                        <td v-else-if="cardName === 'In Bearbeitung'" class="border border-gray-500">{{ ticket.assignee }}</td>
                        <td v-else class="border border-gray-500">{{ ticket.closeDate }}</td>
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
            }
        }
    }
</script>