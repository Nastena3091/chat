<template>
    <section class="flex">
    <nav class="bg-fuchsia-300 text-3xl h-screen w-1/5 overflow-y-auto text-white ">
        <ul>
            <li>Нова переписка</li>
            <hr>
            <li>Петро</li>
            <hr>
            <li>Павло</li>
            <hr>
            <li>Микола</li>
            <hr>
            <li>Іван</li>
            <hr>
            <li>Василь</li>
            <hr>
            <li>Артем</li>
            <hr>
            <li>Дмитро</li>
            <hr>
            <li>Михайло</li>
            <hr>
        </ul>
    </nav>
        <slot />
    </section>
</template>
<style scoped>
li{
  @apply py-5 px-3 whitespace-nowrap;
  text-shadow: -1px -1px 0 plum, 1px -1px 0 plum, -1px 1px 0 plum, 1px 1px 0 plum;
  
}
hr{
  @apply border-fuchsia-400
}
</style>