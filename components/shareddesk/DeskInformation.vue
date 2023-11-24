<template>
    <div class="w-64 bg-base-200 flex flex-col">
        <div class="mx-6">
            <ul class="items-center">
                <li>
                    <img :src="deskImagePath" alt="" class="rounded-xl w-60 mx-auto mt-4">
                </li>
            </ul>
            <div>
                <p class="text-2xl">Arbeitsplatz {{ deskNumber }}</p>
                <p class="text-gray-500">{{ officeName }}, {{ floor }} </p>
            </div>
            <div class="mt-6">
                <h3 class="text-xl font-medium">Features</h3>
                <ul class="ml-6 list-disc text-gray-500">
                    <li v-for="feature in features" :key="feature">{{ feature }}</li>
                </ul>
            </div>
        </div>
        <hr class="border-base-300 mt-2">
        <div class="mx-6 my-4 flex flex-col flex-grow justify-between">
            <div>
                <input v-model="date" type="date" class="input input-bordered w-full">
            </div>
            <div>
                <button @click="foo" class="btn btn-active hover:bg-primary-content w-full mt-4">Jetzt buchen</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date: ''
            }
        },
        props: {
            deskImagePath: {
                type: String,
                required: true
            },
            deskNumber: {
                type: Number,
                required: true
            },
            features: {
                type: Array,
                required: true
            },
            floor: {
                type: String,
                required: true
            },
            officeName: {
                type: String,
                required: true
            }
        },
        methods: {
            foo() {
                console.log(this.date)
            }
        }
    }
</script>