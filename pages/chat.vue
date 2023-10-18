<template>
    <div class="text-white">
        <div class="bg--lightest h-screen overflow-y-auto w-full relative">
          <div class="flex sticky z-10 text-3xl text-center" style="top: 0;">
            <div class="w-full bg-red-lighter py-5">Петро</div>
            <div class="w-full bg-purple-lighter py-5">{{user.name}}</div>
          </div>
          <div class="pb-20 flex-row w-full" >
            <div class="max-w-md get rounded-lg m-10 p-2" v-for="m in messages" :key="m.text">
              <p align="justify">{{ m.text }}</p>
              <p align="right" class="text-grey-lighter"></p>
            </div>
          </div>
          <div class="fixed flex w-full" style="bottom: 24px;">
            <input type="text" class="w-2/3 p-3 rounded-full bg-purple-lightest ml-auto block text-black border-purple-lighter border"><button @click="" type="button" class="bg-red-lighter p-4 rounded-full mr-auto ml-2"><img src="../assets/img/free-icon-font-paper-plane (1).png" alt="Відправити" class="w-6 "></button>
          </div>
        </div>
    </div>
</template>

<style scoped>
    .get{
    @apply bg-red-lighter 
    }
    .send{
    @apply bg-purple-lighter ml-auto
    }
</style>
<script>
import {mapState} from 'vuex'

export default{
  middleware:['chat'],
  computed: mapState(["user", "messages"])
}
</script>