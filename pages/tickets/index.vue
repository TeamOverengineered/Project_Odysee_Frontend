<template>
    <TicketsUser v-if="!isAdmin"/>
    <TicketsAdmin v-if="isAdmin"/>
</template>

<script>
export default {
    data() {
        return {
            isAdmin: true
        }
    }
}
</script>