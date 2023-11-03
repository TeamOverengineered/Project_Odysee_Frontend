<template>
    <div class="navbar bg-base-300">
  <div class="flex-1">
    <a href="/dashboard"><img src="/images/toelogo.png.svg" alt=""></a>
  </div>
  <div class="flex-none">
    <div class="menu menu-horizontal px-1">
        <RoundButton :image="'bell.png'" :notifications="1" class="mx-1"/>
        <RoundButton :image="'user.png'" class="mx-1"/>
    </div>
  </div>
</div>
</template>