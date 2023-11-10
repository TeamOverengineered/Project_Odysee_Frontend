<template>
    <div class="absolute right-20 top-20 mt-2 w-80 bg-base-200 border border-gray-400 rounded shadow-lg">
      <ul class="py-2">
        <li class="block py-2 text-neutral">
            <a href="#" >{{ notifications }} neue Nachrichten</a>
        </li>
        <li class="block py-2 text-neutral ">
            <a href="#" >Neue Buchung</a>
        </li>
        <li class="block py-2 text-neutral">
            <a href="#" >Platz Frei</a>
        </li>
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
