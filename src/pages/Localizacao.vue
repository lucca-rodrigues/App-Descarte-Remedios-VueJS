<template>
  <q-page-container class="text-center q-pa-sm login-page">
      <h1 class="text-h5 text-red-10 text-weight-bold">Qual o seu Endereço</h1>
      <p>Como deseja encontrar os pontos de coleta?</p>
      <q-card class="my-card bg-green-10 text-white q-pt-xl q-pb-xl gradient-card">
        <q-card-section class="text-weight-bold">
          <div class="row">
            <div class="col-4">
              <img alt="Informações Imporantes" src="statics/images/info.svg" width="30px">
            </div>
            <div class="col-8 text-left">
              Permitir <br>Geolocalização
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card bg-green-10 text-white q-pt-xl q-pb-xl gradient-card q-mt-md">
        <q-card-section class="text-weight-bold">
          <div class="row">
            <div class="col-4">
              <img alt="Informações Imporantes" src="statics/images/info.svg" width="30px">
            </div>
            <div class="col-8 text-left">
              Cadastrar<br>Endereço
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card bg-green-10 text-white q-pt-xl q-pb-xl gradient-card q-mt-md">
        <q-card-section class="text-weight-bold">
          <div class="row">
            <div class="col-4">
              <img alt="Informações Imporantes" src="statics/images/info.svg" width="30px">
            </div>
            <div class="col-8 text-left">
              Cadastrar<br>Endereço
            </div>
          </div>
        </q-card-section>
      </q-card>
      <div class="q-pa-md">
        <router-link to="/painel-usuario">
          <q-btn class="full-width q-mt-lg q-pa-md" unelevated rounded color="green-10" label="Continuar" />
        </router-link>
      </div>
  </q-page-container>
</template>
<style>
 .gradient-card{background-image: linear-gradient(#72B588, #96C971, #BADE5A)!important;}
</style>
<script>
export default {
  name: 'localizacao'
}

</script>
