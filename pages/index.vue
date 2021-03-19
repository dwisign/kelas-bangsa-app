<template>
  <div>
    <div class="hero">
      <b-container>
        <b-row>
          <b-col cols="5" class="text-center">
            <img src="/app-screen.png" alt="" />
          </b-col>
          <b-col cols="4" class="align-self-center">
            <div class="quote">
              <h1 class="text-primary">
                Kami percaya setiap orang mempunyai sesuatu yang dapat diajarkan kepada orang lain
              </h1>
              <br><br>
              <NuxtLink to="/">
                <img src="/app-store.png" alt="" width="128"/>
              </NuxtLink>&nbsp;
              <NuxtLink to="/">
                <img src="/play-store.png" alt="" width="122"/>
              </NuxtLink>
            </div>
          </b-col>
          <b-col cols="3">
            <img src="quote-icon.svg" alt="quote-icon">
          </b-col>
        </b-row>
        <div class="redtangle">
          <img src="redtangle.svg" alt="retangle">
        </div>
      </b-container>
    </div>
    <div class="overview">
      <b-container>
        <b-row>
          <b-col cols-12>
            <h4 class="text-primary">OVERVIEW</h4>
            <br>
            <p>
              Kelas Bangsa merupakan sebuah platform online yang membuka kesempatan bagi para tenaga pengajar di berbagai bidang baik akedemis, non akademis, ahli atau profesional, maupun non-profesional, untuk dapat memperluas peluang kerja, serta memudahkan masyarakat untuk mendapatkan edukasi dari pengajar yang tepat di bidangnya.
            </p>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col md="6" offset-md="3">
            <b-row>
              <b-col cols-4>
                <img src="overview-icon-1.png" alt="overview-icon" width="100">
              </b-col>
              <b-col cols-4>
                <img src="overview-icon-2.png" alt="overview-icon" width="100">
              </b-col>
              <b-col cols-4>
                <img src="overview-icon-3.png" alt="overview-icon" width="100">
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="keunggulan">
      <b-container>
        <b-row>
          <b-col cols-12>
            <h4 class="text-primary">KEUNGGULAN</h4>
            <br>
            <p>
              Beberapa Keunggulan mitra kelas yang dapat dirasakan <br>secara langsung
            </p>
          </b-col>
        </b-row>
      </b-container>
      <div class="carousel-wrapper mt-5">
        <client-only>
          <carousel v-bind="options">
            <slide v-for="i in 5" :key="i" class="slide-item">
              <!-- <img :src="`./${i}-overview-icon.png`" /> -->
            </slide>
          </carousel>
        </client-only>
      </div>
    </div>
    <div class="faq">
      <b-container>
        <b-row>
          <b-col cols-12>
            <h4 class="text-primary">TANYA JAWAB</h4>
            <br>
            <p>
              Kami telah menjawab berbagai macam Pertanyaan untuk Kenyamanan Anda
            </p>
            <div class="accordion" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-1 variant="default">Siapa saja yang dapat menjadi partner di Kelas Bangsa?</b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                    <b-card-text></b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-2 variant="default">Dimana lokasi mengajar akan dilakukan?</b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text></b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-3 variant="default">Apakah Kelas Bangsa merupakan tempat untuk bimbingan belajar (bimbel) atau agency guru?</b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text></b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'web',
  auth: false,
  data() {
    return {
      options: {
        loop: false,
        perPage: 4,
        paginationEnabled: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  p{
    line-height: 1.8em;
  }
  .hero{
    padding-top: 30px;
    h1{
      line-height: 1.5em;
      font-weight: 200;
    }
  }
  .redtangle{
    justify-content: right;
    display: flex;
    margin-top: -400px;
    img{
      margin-right: -600px;
    }
  }
  .overview{
    text-align: center;
    margin-top: -200px;
    padding: 80px 150px 150px;
  }
  .keunggulan{
    background: #f2f2f2;
    padding: 100px 0px;
  }
  .faq{
    padding: 80px 0px;
  }
  .carousel-wrapper {
    .VueCarousel-slide {
      text-align: center;
    }
    .slide-item{
      width: 100%;
      height: 450px;
      -webkit-box-shadow: 2px 6px 13px -1px rgba(0,0,0,0.22);
      -moz-box-shadow: 2px 6px 13px -1px rgba(0,0,0,0.22);
      box-shadow: 2px 6px 13px -1px rgba(0,0,0,0.22);
      background: #fff;
      margin: 15px 10px 30px;
      border-radius: 30px;
    }
  }
</style>
