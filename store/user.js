import {defineStore} from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            userId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            userName: 'Patrick Gugelsberger',
            firstName: 'Patrick',
            lastName: 'Gugelsberger',
            email: 'pgugelsberger@gmail.com',
            isAdmin: false
        }
    },
    getters: {
        userData: state => state
    },
    actions: {
        setUserData(data) {
            this.userName = data.userName
            this.firstName = data.firstName
            this.lastName = data.lastName
            this.email = data.email
            this.isAdmin = data.isAdmin
        },
        logout() {
            this.userName = ''
            this.firstName = ''
            this.lastName = ''
            this.email = ''
            this.isAdmin = false
        }
    },
    persist: true
})