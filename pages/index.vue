<template>
  <div class="bg-orange-lightest w-full flex h-screen">
        <div class=" bg-red-lightest mx-auto my-auto rounded-lg" >
          <FormulateForm @submit="submit">
            <FormulateInput
            type="text"
            placeholder="Ваше ім'я"
            name="name"
            v-model="name"
            validation="required|min:3|max:20"
          />
          <FormulateInput
            type="email"
            placeholder="Електронна пошта"
            name="email"
            v-model="email"
            validation="required|email"
          />
          <FormulateInput
            type="password"
            placeholder="Пароль"
            name="password"
            v-model="password"
            validation="required|min:8|max:20|matches:/[0-9]/"
          />
          <FormulateInput
            type="password"
            placeholder="Повторіть пароль"
            name="password_confirm"
            validation="required|confirm"
          />
          <FormulateInput
            input-class="bg-red-lighter w-auto  text-white mx-auto p-3 rounded-lg block"
            type="submit"
            name="submit_button"
            label="ЗАРЕЄСТРУВАТИСЯ"
          />
          </FormulateForm> 
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data:()=>({
    name:'',
    email:'',
    password:'',
  }),
  sockets: {
    connect: function() {
      console.log("socket connected");
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    submit(){
      const user={
        name: this.name,
        email: this.email,
        password: this.password
      }
      
      console.log('OK')
      this.$socket.emit('SignUp',user,data=>{
        if (typeof data ==='string'){
          console.error(data)
        } else {
          user.id = data.userId
          this.setUser(user)
          this.$router.push('/chat')
        }
      })
    },
    message() {
      this.$socket.emit("createMessage", {
        text: "FROM CLIENT"
      });
    }
  }
};
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
a{
  @apply 
}
</style>
