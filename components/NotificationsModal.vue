<template>
  <div class="absolute right-20 top-20 mt-2 w-80 bg-base-200 border border-gray-400 rounded shadow-lg">
    <ul class="">
      <nuxt-link to="/">
        <li class="px-4 py-2 text-neutral hover:text-base-content hover:bg-primary-content">
          {{ notifications }} neue Nachrichten
        </li>
      </nuxt-link>
      <nuxt-link to="/">
        <li class="px-4 py-2 text-neutral hover:text-base-content hover:bg-primary-content">
          Neue Buchung
        </li>
      </nuxt-link>
      <nuxt-link to="/">
        <li class="px-4 py-2 text-neutral hover:text-base-content hover:bg-primary-content">
          Platz Frei
        </li>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false
    },
    notifications: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  methods: {
    handleClickOutside(event) {
      const componentElement = this.$el;
      if (!componentElement.contains(event.target) && this.visible) {
        this.$emit("closeMenu");
      }
      this.visible = true
    }
  }
};
</script>
