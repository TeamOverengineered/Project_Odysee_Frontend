<template>
  <div class="flex flex-col flex-grow justify-around">
    <div class="px-16 w-full mt-8">
      <h1 class="text-4xl">Ticket {{ ticket.id }}</h1>
    </div>
    <div class="flex">
      <TicketsDetailsInformation :ticket="ticket"/>
    </div>
    <div class="flex flex-row">
      <TicketsDetailsComments :ticket="ticket" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ticket: {
        id: "250627_001",
        subject: "Diese kaputt",
        description: "Das ist eine kaputte Scheiße Junge, ich raste aus.",
        createDate: "25.06.2027",
        closeDate: null,
        state: "Offen",
        assignee: "Simon Stachowiak",
        reporter: "Patrick Gugelsberger",
        new: true
      }
    }
  }
}
</script>