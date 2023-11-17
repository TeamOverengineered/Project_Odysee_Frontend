<template>
    <div class="absolute right-0 top-20 mt-2 w-80 bg-base-200 border border-gray-400 rounded shadow-lg">
        <div class="flex items-center p-4">
            <img src="/images/logo.png" class="w-12 h-12 rounded-full" alt="Profile Image" />
            <div class="ml-4">
                <p class="text-lg font-semibold">{{ userName }}</p>
                <p class="text-gray-500">{{ userEmail }}</p>
            </div>
        </div>
        <hr class="border-gray-400" />
        <ul class="py-2">
            <li>
                <a href="#" class="block px-4 py-2 text-neutral hover:bg-base-300">
                    Konto
                </a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-neutral hover:bg-base-300">
                    Abmelden
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        };
    },
    props: {
        userName: { 
            type: String,
            default: ''
        },
        userEmail: {
            type: String,
            default: ''
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside)
    },
    methods: {
        handleClickOutside(event) {
                const componentElement = this.$el;
                if (!componentElement.contains(event.target) && this.visible) {
                    this.$emit("closeMenu");
                }
                this.visible = true
        }
    }
};
</script>
