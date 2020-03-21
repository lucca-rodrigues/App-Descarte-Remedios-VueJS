<template>
  <q-page-container padding class="text-center q-pa-sm">
      <!--<h1 class="text-h5 text-red-10 text-weight-bold">Cadastrar Endereço</h1> -->
        <div class="row">
          <div class="col-6">
            <q-card class="my-card bg-green-10 text-white q-pt-md q-pb-md">
              <q-card-section class="text-weight-bold">
                ÚLTIMO ACESSO
               <p class="text-h4 text-weight-bold q-mb-none">31/07</p>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-6">
            <q-card class="my-card bg-green-10 text-white q-pt-md q-pb-md">
              <q-card-section class="text-weight-bold">
                ÚLTIMO DESCARTE
                <p class="text-h4 text-weight-bold q-mb-none">31/07</p>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <router-link to="/painel-usuario">
          <q-btn class="full-width q-mt-lg q-pa-sm bg-green-10 q-mt-xl" unelevated rounded color="green" label="Comece a descartar" />
        </router-link>
        <div class="row q-pt-xl q-pb-xl d-flex">
          <div class="col-4 q-pa-md text-weight-bold">
            <img alt="Informações Imporantes" src="statics/images/info.svg" width="30px">
            Informações
            Imporantes
          </div>
          <div class="col-4 q-pa-md text-weight-bold">
            <img alt="Laboratório Participantes" src="statics/images/laboratorio.svg" width="30px">
            Laboratório
            Participantes
          </div>
          <div class="col-4 q-pa-md text-weight-bold">
            <img alt="Farmácias Participantes" src="statics/images/farmacia.svg" width="30px">
            Farmácias
            Participantes
          </div>
        </div>
        <div class="row q-pt-md d-flex">
          <div class="col-4 q-pa-md text-weight-bold">
            <img alt="Pontos de Coletas" src="statics/images/coleta.svg" width="30px"><br>
            Pontos de Coletas
          </div>
          <div class="col-4 q-pa-md text-weight-bold">
            <img alt="Consulta de Medicamentos" src="statics/images/consulta.svg" width="30px">
            Consulta de
            Medicamentos
          </div>
          <div class="col-4 q-pa-md text-weight-bold">
            <img alt="Consulta de Descartes na minha região" src="statics/images/descarte.svg" width="30px">
            Consulta de Descartes
            na minha região
          </div>
        </div>
  </q-page-container>
</template>
<style>
  .radius-sm{border-radius:15px;}
</style>
<script>
export default {
  name: 'painel-usuario'
}

</script>
