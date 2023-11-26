import {defineStore} from 'pinia'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => {
        return {
            authenticated: false,
            loading: false,
        }
    },
    actions: {
        async authenticate ({username, password}) {
            const {data, pending} = await useFetch('https://dummyjson.com/auth/login', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                  username,
                  password,
                },
        });
        this.loading = pending

        if (data.value) {
            const token = useCookie('token');
            token.value = data?.value?.token;
            this.authenticated = true;
          }
        },
        logUserOut() {
            const router = useRouter();
            const token = useCookie('token');
            this.authenticated = false;
            token.value = null;
            router.push('/');
          },
    },
})