<template>
  <q-page-container class="text-center q-pa-sm login-page">
      <h1 class="text-h5 text-red-10 text-weight-bold">Cadastrar Endereço</h1>
      <div class="q-pa-md">
        <div class="text-left">
          Cadastre seu endereço
        </div>
        <q-input class="full-width q-mt-lg" rounded outlined v-model="text" label="CEP" />
        <q-input class="full-width q-mt-lg" rounded outlined v-model="text" label="Endereço" />
        <div class="row">
          <div class="col-6">
            <q-input class="full-width q-mt-lg" rounded outlined v-model="text" width="50%" label="Número" />
          </div>
          <div class="col-6">
           <q-input class="full-width q-mt-lg" rounded outlined v-model="text" label="Complemento" />
          </div>
        </div>
        <q-input class="q-mt-lg" rounded outlined v-model="text" label="Cidade" />
        <q-input class="q-mt-lg" rounded outlined v-model="text" label="Estado" />
        <router-link to="/painel-usuario">
          <q-btn class="full-width q-mt-lg q-pa-sm bg-green-10 q-mt-xl" unelevated rounded color="green" label="Finalizar" />
        </router-link>
      </div>
  </q-page-container>
</template>
<style>
  .radius-sm{border-radius:15px;}
</style>
<script>
export default {
  name: 'cadastrar-endereco'
}

</script>
