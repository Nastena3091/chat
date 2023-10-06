<script>

</script>
<template>
  <section class="flex">
    <nav class="bg-fuchsia-200 text-3xl h-screen w-80 overflow-y-auto">
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
    <div class="bg-red-50 h-screen overflow-y-auto w-full relative">
      <div class="flex sticky top-0 z-10 text-3xl text-center">
        <div class="w-full bg-rose-200 py-5">Петро</div>
        <div class="w-full bg-fuchsia-200 py-5">Анастасія</div>
      </div>
      <div class="">
      </div>
      <div class="absolute bottom-0 w-full bg-black flex">
        <input type="text" class="w-3/4 p-2 rounded-3xl bg-fuchsia-200 mr-auto ml-auto">
      </div>
    </div>
  </section>
</template>
<style scoped>

li{
  @apply py-5 px-3 whitespace-nowrap
  
}
hr{
  @apply border-fuchsia-300
}

</style>
