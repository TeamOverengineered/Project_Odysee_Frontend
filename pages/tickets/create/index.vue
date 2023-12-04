<template>
    <div class="flex flex-grow">
        <div class="mx-16 mt-16 w-full">
            <h1 class="text-4xl">Ticket erstellen</h1>
            <div class="mt-6">
                <div class="w-4/6 h-96 bg-base-300 rounded-xl flex flex-col flex-grow p-6">
                    <div class="flex flex-row">
                        <p class="text-3xl w-1/4">Betreff</p>
                        <input v-model="subject" type="text" class="input text-base input-bordered focus:outline-primary-content w-5/6" placeholder="Betreff eingeben">
                    </div>
                    <div class="flex flex-row mt-6">
                        <p class="text-3xl w-1/4">Beschreibung</p>
                        <textarea v-model="description" placeholder="Hier eine ausführliche Beschreibung des Problems angeben" class="textarea textarea-bordered text-base textarea-lg focus:outline-primary-content w-5/6 h-64 pl-4 resize-none"></textarea>
                    </div>
                </div>
            </div>
            <div class="flex w-1/2 justify-end">
                <button @click="submitTicket" class="btn rounded-md bg-base-200  hover:bg-primary-content mt-6">Neues Ticket anlegen</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            subject: '',
            description: '',
        }
    },
    methods: {
        submitTicket() {
            // TODO: Logik einfügen, Axios Request an API oder nuxt interne Methode?
        }
    }
}
</script>