<template>
    <Header />
        <div class="flex flex-grow h-full justify-between">
            <div id="menu">
                <Menu />
            </div>
            <div id="content" class="flex flex-grow border-b border-gray-400 bg-base-100">
                <slot />
            </div>
        </div>
    <Footer />
</template>