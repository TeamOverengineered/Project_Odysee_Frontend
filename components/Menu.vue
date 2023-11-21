<template>
    <div class="h-full w-64 bg-base-200 flex flex-col justify-between">
        <div>
        <ul class="items-center">
            <nuxt-link to="/dashboard">
                <li class="flex items-center border text-xl border-t-0 border-gray-400 h-12 hover:bg-base-300"
                    :class="$route.name === 'dashboard' ? 'bg-base-300' : ''"><img class="mx-2"
                        src="/images/dashboard-logo.png" alt="Dashboard">Dashboard</li>
            </nuxt-link>
            <nuxt-link to="/shareddesk">
                <li class="flex items-center border text-xl border-t-0 border-gray-400 h-12 hover:bg-base-300 "
                    :class="$route.name === 'shareddesk' ? 'bg-base-300' : ''"><img class="mx-2"
                        src="/images/desk-chair.png" alt="Shared Desk">SharedDesk</li>
            </nuxt-link>
            <nuxt-link to="/tickets">
                <li class="flex items-center border text-xl border-t-0 border-gray-400 h-12 hover:bg-base-300 "
                    :class="$route.name === 'tickets' ? 'bg-base-300' : ''"><img class="mx-2" src="/images/ticket.png"
                        alt="Tickets">Tickets</li>
            </nuxt-link>
            <nuxt-link to="/messages">
                <li class="flex items-center border text-xl border-t-0 border-gray-400 h-12 hover:bg-base-300 "
                    :class="$route.name === 'messages' ? 'bg-base-300' : ''"><img class="mx-2"
                        src="/images/speech-bubble.png" alt="Nachrichten">Nachrichten</li>
            </nuxt-link>
        </ul>
    </div>
    <div>
        <ul>
            <a href="">
                <li class="flex items-center border text-xl border-gray-400 h-12 hover:bg-base-300"><img class="mx-2"
                        src="/images/settings.png" alt="Einstellungen">Einstellungen</li>
            </a>
    </ul>
</div>
    </div>
</template>