<template>
  <div class="flex flex-row flex-grow">
    <div class="w-2/3">
      <img class="w-48 self-center m-8" src="/images/logo.png" alt="">
      <div class="flex flex-col items-center">
        <h1 class="text-4xl font-bold">Registrieren</h1>
        <div class="w-1/2 mx-auto mt-12">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text font-medium text-lg">E-Mail</span>
            </label>
            <input type="email" class="input input-bordered w-full rounded-sm focus:outline-primary-content" v-model="email" />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text font-medium text-lg">Passwort</span>
            </label>
            <input type="password" class="input input-bordered w-full rounded-sm focus:outline-primary-content" v-model="password"/>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text font-medium text-lg">Username</span>
            </label>
            <input type="text" class="input input-bordered w-full rounded-sm focus:outline-primary-content" v-model="username"/>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text font-medium text-lg">Vorname</span>
            </label>
            <input type="text" class="input input-bordered w-full rounded-sm focus:outline-primary-content" v-model="firstName"/>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text font-medium text-lg">Nachname</span>
            </label>
            <input type="text" class="input input-bordered w-full rounded-sm focus:outline-primary-content" v-model="lastName"/>
          </div>
          <button @click="register" class="btn btn-active w-full mt-4 rounded-sm hover:bg-primary-content" :disabled="!canSubmit">Registrieren</button>
        </div>
      </div>
    </div>
    <div class="w-1/3 bg-base-300 flex">
      <div class="flex flex-col flex-grow justify-center">
        <h2 class="text-4xl text-center">Chair Force One</h2>
        <img class="h-1/2  px-9 my-2" src="/images/dashboard.png" alt="">
        <h2 class="text-center text-2xl font-semibold">
          Dérrière ipsum dolor sit amet, <br>
          consectetur adipiscing elit.
        </h2>
        <p class="mt-4 ml-8">Sed in derrière elit, et risus non-stop. Suspendisse potenti. Proin tushie tellus, auctor at
          metus in, interdum buttocks risus.</p>
        <ul class="list-disc my-8 mx-16">
          <li>Feature 1</li>
          <li>Feature 2</li>
        </ul>
        <p class="ml-8">Nullam sodales erat auctor, sagittis semper purus.</p>
      </div>
    </div>
  </div>
</template>

<script>
import apiCalls from "~/src/apiCalls.js";
import guidGenerator from "~/src/guidGenerator.js";
definePageMeta({
  layout: false,
})
export default {
  data() {
    return {
      email: '',
      password: '',
      username: '',
      firstName: '',
      lastName: '',
    }
  },
  computed: {
    canSubmit() {
      if (this.email && this.password && this.username && this.firstName && this.lastName) {
        return true
      }
    }
  },
  methods: {
    register() {
       apiCalls.postUsers({
        id: guidGenerator.generateUuid(),
        mail: this.email,
        password: this.password,
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        isAdmin: false
      })
      .then(response => {
        if (response.data.value !== null) {
          this.$router.push('/')
        } else {
          alert('Dieser Benutzername wird bereits verwendet. Bitte wählen Sie einen anderen.')
        }
      })
    }
  }
}
</script>