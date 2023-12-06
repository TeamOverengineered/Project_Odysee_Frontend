<template>
  <div v-for="comment in comments" class=chat
       :class="this.userStore.userName === comment.user ? 'chat-end' : 'chat-start'">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img alt="Tailwind CSS chat bubble component"
             src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
      </div>
    </div>
    <div class="chat-header">
      {{ comment.user }}
      <time class="text-xs opacity-50">{{ comment.sent }}</time>
    </div>
    <div class="chat-bubble text-black"
         :class="this.userStore.userName === comment.user ? 'bg-primary-content' : 'bg-base-300'">{{ comment.text }}
    </div>
  </div>
</template>
<script>
import {mapStores} from "pinia";
import {useUserStore} from "~/store/user.js";

export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapStores(useUserStore)
  }
}
</script>