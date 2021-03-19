<template>
  <div>
    <div class="navbar-menu">
      <div class="list-menu">
        <div class="item">
          <NuxtLink to="/admin/dashboard">
            <b-icon icon="clipboard-data"></b-icon> Dashboard
          </NuxtLink>
        </div>
        <div class="item">
          <NuxtLink to="/admin/paket">
            <b-icon icon="box"></b-icon> Paket
          </NuxtLink>
        </div>
        <div class="item">
          <NuxtLink to="/admin/booking">
            <b-icon icon="calendar2-check"></b-icon> Booking
          </NuxtLink>
        </div>
        <div class="item">
          <NuxtLink to="/admin/penarikan">
            <b-icon icon="receipt-cutoff"></b-icon> Penarikan
          </NuxtLink>
        </div>
        <div class="item">
          <NuxtLink to="/admin/fee">
            <b-icon icon="credit-card"></b-icon> Fee / Income
          </NuxtLink>
        </div>
        <div class="item">
          <NuxtLink to="/admin/tarif">
            <b-icon icon="tag"></b-icon> Tarif
          </NuxtLink>
        </div>
        <div class="item">
          <NuxtLink to="/admin/complain">
            <b-icon icon="chat-dots"></b-icon> Complain
          </NuxtLink>
        </div>
        <div class="item">
          <NuxtLink to="/admin/performance">
            <b-icon icon="graph-up"></b-icon> Performance
          </NuxtLink>
        </div>
        <div class="item">
          <NuxtLink to="/admin/customer">
            <b-icon icon="people"></b-icon> Customer
          </NuxtLink>
        </div>
        <div class="item">
            <a href="#" v-b-toggle.collapse-1 variant="default"><b-icon icon="collection"></b-icon> Master</a>
            <b-collapse id="collapse-1" class="mt-2">
                <div class="sub-item">
                  <NuxtLink to="/admin/master-guru">
                    Guru
                  </NuxtLink>
                </div>
                <div class="sub-item">
                  <NuxtLink to="/admin/master-murid">
                    Murid
                  </NuxtLink>
                </div>
                <div class="sub-item">
                  <NuxtLink to="/admin/master-tingkat-sekolah">
                    Tingkat Sekolah
                  </NuxtLink>
                </div>
                <div class="sub-item">
                  <NuxtLink to="/admin/master-kategori">
                    Kategori
                  </NuxtLink>
                </div>
                <div class="sub-item">
                  <NuxtLink to="/admin/master-sub-kategori">
                    Sub Kategori
                  </NuxtLink>
                </div>
                <div class="sub-item">
                  <NuxtLink to="/admin/master-kota">
                    Kota
                  </NuxtLink>
                </div>
                <div class="sub-item">
                  <NuxtLink to="/admin/master-kecamatan">
                    Kecamatan
                  </NuxtLink>
                </div>
                <div class="sub-item">
                  <NuxtLink to="/admin/master-bank">
                    Bank
                  </NuxtLink>
                </div>
            </b-collapse>
        </div>
        <div class="item">
          <NuxtLink to="/admin/user-management">
            <b-icon icon="person"></b-icon> User Management
          </NuxtLink>
        </div>
        <div class="item">
          <NuxtLink to="/admin/report">
            <b-icon icon="clipboard-data"></b-icon> Report
          </NuxtLink>
        </div>
        <div class="item">
          <NuxtLink to="/admin/setting">
            <b-icon icon="gear"></b-icon> Setting
          </NuxtLink>
        </div><br><br>
      </div>
    </div>
    <div class="copyright">
      <p>
        Copyright 2020 <br><b>PT ABS Digital Indonesia</b> <br>All Rights Reserved
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar-menu{
  height: 100vh;
  background: #EAF0F9;
  padding-top: 30px;
  .list-menu{
    height: 80vh;
    overflow-y: auto;
    .item{
      padding: 5px 0px;
      a{
        color: #666;
        padding: 5px 30px;
        display: block;
      }
      .active-link{
        border-right: 5px solid #DC2036;
        font-weight: 600;
      }
      .sub-item{
        padding-left: 15px;
      }
    }
  }
}
.copyright{
  position: absolute;
  bottom: 30px;
  padding: 20px 30px;
  color: #666666;
  font-size: 0.8em;
  background: #D3E4F9;
  width: 100%;
}
</style>
