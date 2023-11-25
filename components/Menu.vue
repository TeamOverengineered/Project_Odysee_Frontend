<template>
    <div class="h-full w-64 bg-base-200 flex flex-col justify-between">
        <div>
        <ul class="items-center">
            <nuxt-link to="/dashboard">
                <li class="flex items-center border text-xl border-t-0 border-gray-400 h-12 hover:bg-primary-content"
                    :class="String($route.name)?.includes('dashboard') ? 'bg-primary-content' : ''"><img class="mx-2"
                        src="/images/dashboard-logo.png" alt="Dashboard">Dashboard</li>
            </nuxt-link>
            <nuxt-link to="/shareddesk">
                <li class="flex items-center border text-xl border-t-0 border-gray-400 h-12 hover:bg-primary-content"
                    :class="String($route.name)?.includes('shareddesk') ? 'bg-primary-content' : ''"><img class="mx-2"
                        src="/images/desk-chair.png" alt="Shared Desk">SharedDesk</li>
            </nuxt-link>
            <nuxt-link to="/tickets">
                <li class="flex items-center border text-xl border-t-0 border-gray-400 h-12 hover:bg-primary-content "
                    :class="String($route.name)?.includes('tickets') ? 'bg-primary-content' : ''"><img class="mx-2" src="/images/ticket.png"
                        alt="Tickets">Tickets</li>
            </nuxt-link>
            <nuxt-link to="/messages">
                <li class="flex items-center border text-xl border-t-0 border-gray-400 h-12 hover:bg-primary-content "
                    :class="String($route.name)?.includes('messages') ? 'bg-primary-content' : ''"><img class="mx-2"
                        src="/images/speech-bubble.png" alt="Nachrichten">Nachrichten</li>
            </nuxt-link>
        </ul>
    </div>
    <div>
        <ul>
            <nuxt-link to="/settings">
                <li class="flex items-center border text-xl border-gray-400 h-12 hover:bg-primary-content" :class="String($route.name)?.includes('settings') ? 'bg-primary-content' : ''">
                    <img class="mx-2" src="/images/settings.png" alt="Einstellungen">
                    Einstellungen
                </li>
            </nuxt-link>
    </ul>
</div>
    </div>
</template>