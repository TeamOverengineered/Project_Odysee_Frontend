<template>
    <div class="grid grid-cols-3 h-screen">
        <div class="col-span-1 bg-base-300 px-8">
            <h1 class="mt-14 text-4xl text-center font-medium">Chair Force One</h1>
            <img class="p-9 h-1/2" src="/images/dashboard.png" alt="">
            <h2 class="text-center text-2xl font-semibold">
                Dérrière ipsum dolor sit amet, <br>
                consectetur adipiscing elit.
            </h2>
            <p class="mt-4">Sed in derrière elit, et risus non-stop. Suspendisse potenti. Proin tushie tellus, auctor at
                metus in, interdum buttocks risus.</p>
            <ul class="list-disc m-8">
                <li>Feature 1</li>
                <li>Feature 2</li>
            </ul>
            <p>Nullam sodales erat auctor, sagittis semper purus.</p>
        </div>
        <div class="col-span-2">
            <div class="w-full">
                <img class="w-96 self-center mx-auto mt-20" src="/images/logo.png" alt="">
            </div>
            <h2 class="text-4xl text-center mt-32">Einloggen</h2>
            <p class="text-3xl text-center mt-6">Geben Sie Ihre E-Mail und Ihr Passwort ein</p>
            <form action="" class="w-1/2 mx-auto mt-12">
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text font-bold text-lg">E-Mail</span>
                    </label>
                    <input type="email" class="input input-bordered w-full rounded-sm focus:outline-primary-content" required />
                </div>
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text font-bold text-lg">Passwort</span>
                    </label>
                    <input type="password" class="input input-bordered w-full rounded-sm focus:outline-primary-content" required/>
                </div>
                <button @click.prevent="login" class="btn btn-active w-full mt-4 rounded-sm hover:bg-primary-content" type="submit">Einloggen</button>
                <div class="flex justify-between mt-2">
                    <a href="/register" class="link hover:text-primary">Registrieren</a>
                    <a href="#" class="link hover:text-primary">Passwort vergessen?</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created

const { authenticate } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  username: 'kminchelle', 
  password: '0lelplR',
});
const router = useRouter();

const login = async () => {
  await authenticate(user.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push('/dashboard');
  }
};

definePageMeta({
  layout: false,
})
</script>