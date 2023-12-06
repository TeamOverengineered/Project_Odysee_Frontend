<template>
  <div class="flex flex-col ml-16 mt-16">
    <div>
      <h1 class="text-4xl">Accounteinstellungen</h1>
    </div>
    <div class="flex flex-row mt-6">
      <div class="flex flex-col">
        <div class="w-64 h-64 flex justify-center items-center">
          <img src="/images/users/circleMask.png" alt="profileImage" class="absolute w-64 h-64 opacity-50">
          <img :src="profileImage" alt="profileImage" class="w-64 h-64">
        </div>
      </div>
      <div>
        <div class="form-control h-full justify-around ml-4 w-80">
          <label class="label pt-0">
            <span class="label-text text-base">Username</span>
          </label>
          <input v-model="userName" type="text" class="input h-10 input-bordered w-full rounded-sm"/>
          <label class="label pt-4">
            <span class="label-text text-base">Vorname</span>
          </label>
          <input v-model="firstName" type="text" class="input h-10 input-bordered w-full rounded-sm"/>
          <label class="label pt-4">
            <span class="label-text text-base">Nachname</span>
          </label>
          <input v-model="lastName" type="text" class="input h-10 input-bordered w-full rounded-sm"/>
        </div>
      </div>
    </div>
    <div class="flex w-64 justify-center">
      <a href="" class="link hover:text-primary text-center">Bild ändern</a>
    </div>
    <div>
      <label class="label">
        <span class="label-text text-base">E-Mail</span>
      </label>
      <input v-model="email" type="email" class="input h-10 input-bordered w-full rounded-sm"/>
      <label class="label">
        <span class="label-text text-base">Passwort</span>
      </label>
      <input v-model="password" type="password" class="input h-10 input-bordered w-full rounded-sm"/>
    </div>
    <div class="flex justify-end">
      <button @click="saveForm"
              class="btn btn-active w-32 mt-4 rounded-sm hover:bg-primary-content">Speichern
      </button>
    </div>
  </div>
</template>

<script>
import {useUserStore} from '~/store/user'
import {mapStores} from 'pinia'

export default {
  data() {
    return {
      profileImage: '/images/users/gerd/profil.jpg',
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      password: 'RühreiMitNutella'
    }
  },
  computed: {
    ...mapStores(useUserStore)
  },
  methods: {
    saveForm() {
      this.userStore.setUserData({
        userName: this.userName,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        isAdmin: true
      })
    }
  },
  created() {
    this.userName = this.userStore.userName
    this.firstName = this.userStore.firstName
    this.lastName = this.userStore.lastName
    this.email = this.userStore.email
  }
}
</script>