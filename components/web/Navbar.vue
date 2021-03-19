<template>
  <div>
    <div class="navbar-menu">
      <b-container>
        <b-row>
          <b-col cols="3">
            <img src="/logo-color.png" alt="" width="180" />
          </b-col>
          <b-col cols="9">
            <div class="list-menu">
              <div class="item">
                <NuxtLink to="/">
                  OVERVIEW
                </NuxtLink>
              </div>
              <div class="item">
                <NuxtLink to="/">
                  KEUNGGULAN
                </NuxtLink>
              </div>
              <div class="item">
                <NuxtLink to="/">
                  TANYA JAWAB
                </NuxtLink>
              </div>
              <div class="item">
                <NuxtLink to="/">
                  KONTAK
                </NuxtLink>
              </div>
              <div class="item">
                <NuxtLink to="/signin">
                  <b-button pill variant="primary" class="btn-login">BERGABUNG</b-button>
                </NuxtLink>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style scoped>
.navbar-menu{
  padding: 30px 0px 20px;
}
.list-menu{
  display: flex;
  justify-content: flex-end;
}
.item{
  padding: 12px 20px;
}
.btn-login{
  padding: 15px 40px;
  margin-top: -15px;
}
</style>
