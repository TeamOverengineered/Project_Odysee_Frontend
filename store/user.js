import {defineStore} from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            userId: 0,
            userName: '',
            firstName: '',
            lastName: '',
            email: ''
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
        },
        logout() {
            this.userName = ''
            this.firstName = ''
            this.lastName = ''
            this.email = ''
        }
    },
    persist: true
})