<template>
    <NuxtLayout>
        <input type="text" name="" id="" placeholder="Ваше ім'я">
        <input type="email" name="" id="" placeholder="Електронна пошта">
        <input type="password" name="" id="" placeholder="Пароль">
        <input type="password" name="" id="" placeholder="Повторіть пароль">
        <input type="button" value="ЗАРЕЄСТРУВАТИСЯ" class="bg-rose-300 w-1/2 text-white">
    </NuxtLayout>
</template>
<script>
definePageMeta({
    layout:'login'
})
</script>
<style>
input{
    @apply p-3 rounded-xl w-4/5 block mx-auto my-8
}
</style>