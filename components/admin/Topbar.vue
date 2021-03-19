<template>
    <div class="topbar">
        <div class="row no-gutters">
            <div class="col-2">
                <div class="brand">
                    <NuxtLink to="/admin/dashboard">
                        <img src="/logo-color.png" alt="" />
                    </NuxtLink>
                </div>
            </div>
            <div class="col-10">
                <div class="right-menu">
                    <b-dropdown id="dropdown-right" v-bind:text="'Welcome ' + this.$store.state.auth.user.nama" class="m-md-2 pl-0"  right  variant="default">
                        <b-dropdown-item>
                            <b-avatar src="https://placekitten.com/300/300"></b-avatar> &nbsp; Profile
                        </b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item class="text-center">
                            <a href="" @click="logout">
                                Logout
                            </a>
                        </b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    methods: {
        ...mapMutations(['SET_IS_AUTH']),
        async logout() {
            await this.$auth.logout()
            this.SET_IS_AUTH(false)
            this.$router.push('/signin')
        }
    }
}
</script>

<style lang="scss" scoped>
.topbar{
    font-size: 0.7em;
}
.brand{
    background: #D3E4F9;
    height: 50px;
    padding-top: 10px;
    padding-left: 25px;
    img{
        width: 140px;
    }
}
.right-menu{
    background: #EFF3FB;
    height: 50px;
    text-align: right;
    .user-profile{
        text-align: right;
    }
    .btn{
        padding-left: 0px !important;
    }
}
</style>
