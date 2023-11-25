<template>
    <div class="navbar top-0 bg-base-300 shadow-sm py-4 border-b border-gray-400" id="header">
        <div class="flex-1">
            <a href="/dashboard"><img src="/images/toelogo.png.svg"></a>
        </div>
        <div class="flex-none">
            <div class="menu menu-horizontal px-1">
                <RoundButton :class="isNotificationMenuOpen ? 'bg-primary-content' : '' " :image="'bell.png'" :notifications="3" class="mx-1" id="notification" @click="toggleMenu('isNotificationMenuOpen')"/>
                <NotificationsModal @closeMenu="toggleMenu('isNotificationMenuOpen')" v-if="isNotificationMenuOpen" :notifications="3" />
                <RoundButton :class="isUserMenuOpen ? 'bg-primary-content' : '' " :image="'user.png'" class="mx-1" id="profile" @click="toggleMenu('isUserMenuOpen')"/>
                <UserModal @closeMenu="toggleMenu('isUserMenuOpen')" v-if="isUserMenuOpen" :userName="userName" :userEmail="userEmail" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isUserMenuOpen: false,
            isNotificationMenuOpen: false,
            userName: "John Doe",
            userEmail: "erzfeind@gmx.de"
        }
    },
    methods: {
        /**
         * Toggles the menu based on the provided data.
         *
         * @param {string} data - The data key to toggle.
         */
        toggleMenu(data) {
            this[data] = !this[data]
        }
    }
}
</script>