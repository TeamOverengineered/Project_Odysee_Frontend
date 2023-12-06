<template>
  <div class="flex flex-col flex-grow">
    <div class="px-16 w-full mt-16">
      <h1 class="text-4xl">Tickets</h1>
      <div class="flex flex-row justify-start items-end mt-6">
        <div class="form-control">
          <label class="label">
            <span class="label-text font-bold text-base">Von</span>
          </label>
          <input type="date" class="input input-bordered w-64 rounded-xl focus:outline-primary-content" required/>
        </div>
        <div class="form-control ml-6">
          <label class="label">
            <span class="label-text font-bold text-base">Bis</span>
          </label>
          <input type="date" class="input input-bordered w-64 rounded-xl focus:outline-primary-content" required/>
        </div>
        <div class="form-control ml-6">
          <label class="label cursor-pointer">
            <span class="label-text mr-4 text-lg">Nur mir zugewiesene Tickets anzeigen</span>
            <input type="checkbox" checked="checked" class="checkbox"/>
          </label>
        </div>
        <button class="btn rounded-full bg-base-200 ml-6 hover:bg-primary-content"><img src="/images/search.png" alt="">
        </button>
      </div>
    </div>
    <div class="px-16 mt-8 flex flex-row justify-between">
      <TicketsCard :ticketData="tickets" cardName="Offen"/>
      <TicketsCard :ticketData="tickets" cardName="In Bearbeitung"/>
      <TicketsCard :ticketData="tickets" cardName="Geschlossen"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fromDate: '',
      toDate: '',
      tickets: [
        {
          id: "250627_001",
          subject: "Diese kaputt",
          createDate: "25.06.2027",
          closeDate: null,
          state: "Offen",
          assignee: "Simon Stachowiak",
          reporter: "Patrick Gugelsberger",
          new: true
        },
        {
          id: "250627_002",
          subject: "Nix gut",
          createDate: "25.06.2027",
          closeDate: null,
          state: "In Bearbeitung",
          assignee: "Patrick Gugelsberger",
          reporter: "Justin Koerner",
          new: false
        },
        {
          id: "250627_003",
          subject: "Komm gucken du Spast",
          createDate: "25.06.2027",
          closeDate: "25.07.2027",
          state: "Geschlossen",
          assignee: "Justin Koerner",
          reporter: "Patrick Gugelsberger",
          new: false
        },
        {
          id: "250627_004",
          subject: "...",
          createDate: "25.06.2027",
          closeDate: null,
          state: "Offen",
          assignee: "Nicht zugwiesen",
          reporter: "Patrick Gugelsberger",
          new: false
        },
        {
          id: "250627_005",
          subject: "HELP",
          createDate: "25.06.2027",
          closeDate: null,
          state: "In Bearbeitung",
          assignee: "Simon Stachowiak",
          reporter: "Simon Stachowiak",
          new: false
        },
        {
          id: "250627_006",
          subject: "HALLOOOOOOOOOOO",
          createDate: "25.06.2027",
          closeDate: "25.07.2027",
          state: "Geschlossen",
          assignee: "Patrick Gugelsberger",
          reporter: "Gerd der Wixxer",
          new: false
        },
        {
          id: "250627_001",
          subject: "Diese kaputt",
          createDate: "25.06.2027",
          closeDate: null,
          state: "Offen",
          assignee: "Simon Stachowiak",
          reporter: "Patrick Gugelsberger",
          new: true
        },
        {
          id: "250627_002",
          subject: "Nix gut",
          createDate: "25.06.2027",
          closeDate: null,
          state: "In Bearbeitung",
          assignee: "Patrick Gugelsberger",
          reporter: "Justin Koerner",
          new: false
        },
        {
          id: "250627_003",
          subject: "Komm gucken du Spast",
          createDate: "25.06.2027",
          closeDate: "25.07.2027",
          state: "Geschlossen",
          assignee: "Justin Koerner",
          reporter: "Patrick Gugelsberger",
          new: false
        },
        {
          id: "250627_004",
          subject: "...",
          createDate: "25.06.2027",
          closeDate: null,
          state: "Offen",
          assignee: "Nicht zugwiesen",
          reporter: "Patrick Gugelsberger",
          new: false
        },
        {
          id: "250627_005",
          subject: "HELP",
          createDate: "25.06.2027",
          closeDate: null,
          state: "In Bearbeitung",
          assignee: "Simon Stachowiak",
          reporter: "Simon Stachowiak",
          new: false
        },
        {
          id: "250627_006",
          subject: "HALLOOOOOOOOOOO",
          createDate: "25.06.2027",
          closeDate: "25.07.2027",
          state: "Geschlossen",
          assignee: "Patrick Gugelsberger",
          reporter: "Gerd der Wixxer",
          new: false
        },
        {
          id: "250627_001",
          subject: "Diese kaputt",
          createDate: "25.06.2027",
          closeDate: null,
          state: "Offen",
          assignee: "Simon Stachowiak",
          reporter: "Patrick Gugelsberger",
          new: true
        },
        {
          id: "250627_002",
          subject: "Nix gut",
          createDate: "25.06.2027",
          closeDate: null,
          state: "In Bearbeitung",
          assignee: "Patrick Gugelsberger",
          reporter: "Justin Koerner",
          new: false
        },
        {
          id: "250627_003",
          subject: "Komm gucken du Spast",
          createDate: "25.06.2027",
          closeDate: "25.07.2027",
          state: "Geschlossen",
          assignee: "Justin Koerner",
          reporter: "Patrick Gugelsberger",
          new: false
        },
        {
          id: "250627_004",
          subject: "...",
          createDate: "25.06.2027",
          closeDate: null,
          state: "Offen",
          assignee: "Nicht zugwiesen",
          reporter: "Patrick Gugelsberger",
          new: false
        },
        {
          id: "250627_005",
          subject: "HELP",
          createDate: "25.06.2027",
          closeDate: null,
          state: "In Bearbeitung",
          assignee: "Simon Stachowiak",
          reporter: "Simon Stachowiak",
          new: false
        },
        {
          id: "250627_006",
          subject: "HALLOOOOOOOOOOO",
          createDate: "25.06.2027",
          closeDate: "25.07.2027",
          state: "Geschlossen",
          assignee: "Patrick Gugelsberger",
          reporter: "Gerd der Wixxer",
          new: false
        },
      ]
    }
  }
}
</script>