<template>
  <TicketsUser v-if="!isAdmin"/>
  <TicketsAdmin v-if="isAdmin"/>
</template>

<script>
import {mapStores} from "pinia";
import {useUserStore} from "~/store/user.js";

export default {
  data() {
    return {
      isAdmin: null
    }
  },
  computed: {
    ...mapStores(useUserStore)
  },
  created() {
    this.isAdmin = this.userStore.isAdmin
  },

}
</script>