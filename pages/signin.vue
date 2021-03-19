<template>
    <b-container>
        <h5 class="text-center"><b>SIGN IN</b></h5>
        <form>
            <div class="mb-3 mt-5">
                <label for="email-address" class="form-label">Email address</label>
                <input 
                    type="email"
                    v-model="login.email" 
                    class="form-control" 
                    id="email-address"
                    placeholder="contoh: mail@mail.com"
                    required
                />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                    @keyup.enter="userLogin" 
                    type="password"
                    v-model="login.password" 
                    class="form-control" 
                    id="password"
                    required
                />
            </div>
            <div class="mb-5 mt-5">
                <b-button
                    @click="userLogin" 
                    pill 
                    variant="primary" 
                    class="btn-block"
                >
                    Sign In
                </b-button>
            </div>
        </form>
        <div class="mb-3">
            <p class="text-center">
                <NuxtLink to="/signup">Sign Up</NuxtLink> | <NuxtLink to="/forgot-password">Forgot Password</NuxtLink>
            </p>
        </div>
    </b-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'user-access',
  auth: false,
  data(){
      return{
        login: {
            email: '',
            password: ''
        }
      }
  },
  mounted() {
        if (this.$auth.loggedIn) {
            this.$router.push('/admin/dashboard')
        }
  },
  methods: {
    //   async userLogin(){
    //     try{
    //         let response = await this.$auth.loginWith('local',{data: this.login})
    //         this.$auth.setUser(response.data.data)
    //         console.log(response)
    //     } catch(error){
    //         console.log(error)
    //     }
    //   }
    ...mapMutations(['SET_IS_AUTH']),
    userLogin() {
        this.$auth.loginWith('local', {
            data: {
                email: this.login.email,
                password: this.login.password
            }
        }).then(() => {
            this.SET_IS_AUTH(true)
            this.$router.push('/admin/dashboard')
        }).catch(error=>{
          console.log(error)
        })
    }
  }
}
</script>
