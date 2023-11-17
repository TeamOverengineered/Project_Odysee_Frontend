<template>
    <h1 class="text-2xl mx-16 mt-16 fixed">Shared Desk</h1>
    <div id="cards" class="grid grid-cols-3 w-full mx-auto items-center">
        <div v-for="card in cards" class="mx-auto">
            <ShareddeskCard :imagePath="card.imagePath" :alt="card.alt" :title="card.title" :description="card.description" :freeSpaces="card.freeSpaces" :url="card.url" class="mx-6"/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cards: {
                    hqaachen: {
                        imagePath: "images/offices/aachen2.jpg",
                        alt: "Aachen Office HQ",
                        title: "Aachen HQ",
                        description: "This is where the magic happens.",
                        url: "/shareddesk/aachenhq",
                        freeSpaces: 0
                    },
                    singapur: {
                        imagePath: "images/offices/singapur.jpg",
                        alt: "Singapur Office",
                        title: "Singapur",
                        description: "Dicks may be small here, but our offices sure are not.",
                        url: "/shareddesk/singapur",
                        freeSpaces: 3
                    },
                    aachen: {
                        imagePath: "images/offices/aachen.jpg",
                        alt: "Aachen Office",
                        title: "Aachen",
                        description: "Because one office is not enough.",
                        url: "/shareddesk/aachen",
                        freeSpaces: 5
                    }
                }
            }
        }
    }
</script>