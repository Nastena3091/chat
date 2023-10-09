<script>

</script>

<template>
  <NuxtLayout class="text-white">
      <div class="bg-red-50 h-screen overflow-y-auto w-full relative">
        <div class="flex sticky top-0 z-10 text-3xl text-center">
          <div class="w-full bg-rose-300 py-5">Петро</div>
          <div class="w-full bg-fuchsia-300 py-5">Анастасія</div>
        </div>
        <div class="pb-20 flex-row w-full">
          <div class="max-w-xl get rounded-xl m-10 p-2">
            <p align="justify">Привіт! Як справи?</p>
            <p align="right" class="text-zinc-400">18:06</p>
          </div>
          <div class="max-w-xl send rounded-xl m-10 p-2">
            <p align="justify" >Привіт! Добре, дякую що спитав.</p>
            <p align="right" class="text-zinc-400">18:06</p>
          </div>
        </div>
        <div class="fixed bottom-6 flex w-5/6">
          <input type="text" class="w-2/3 p-3 rounded-3xl bg-fuchsia-200 ml-auto block text-black"><button type="button" class="bg-rose-300 p-5 rounded-full mr-auto ml-2"><img src="../assets/img/free-icon-font-paper-plane (1).png" alt="Відправити" class="w-10 "></button>
        </div>
      </div>
  </NuxtLayout>
</template>
<style scoped>
.get{
  @apply bg-rose-300 
}
.send{
  @apply bg-fuchsia-300 ml-auto
}
</style>
