import {useAuthStore} from "~/store/auth";

export default defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie('token'); // get token from cookies

  console.log(to)

  if (token.value) {
    // check if value exists
    authenticated.value = true; // update the state to authenticated
  }

   // if token exists and url is /login redirect to homepage
   if (token.value && to?.path === '/') {
     return navigateTo('/dashboard');
   }

   // if token doesn't exist redirect to log in
   if (!token.value && to?.path !== '/') {
     abortNavigation();
     return navigateTo('/');
   }
});
