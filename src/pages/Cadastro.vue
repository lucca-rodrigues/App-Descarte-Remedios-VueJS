<template>
  <q-page-container class="text-center q-pa-sm login-page">
      <h1 class="text-h5 text-red-10 text-weight-bold">Cadastro</h1>
      <div>Conclua o seu cadastro e comece o descarte consciente!</div>
      <div class="q-pa-md">
        <q-input class="q-mt-lg" rounded outlined v-model="text" label="CPF/CNPJ" />
        <q-input class="q-mt-lg" rounded outlined v-model="text" label="como deseja ser chamado?" />
        <q-input class="q-mt-lg" rounded outlined v-model="text" label="Nome" />
        <q-input class="q-mt-lg" rounded outlined v-model="text" label="E-mail" />
        <q-input class="q-mt-lg" rounded outlined v-model="text" label="Senha" />
        <q-input class="q-mt-lg" rounded outlined v-model="text" label="Repita sua senha" />
        <router-link to="/localizacao">
          <q-btn class="full-width q-mt-lg q-pa-sm bg-green-10" unelevated rounded color="green" label="Continuar" />
        </router-link>
      </div>
  </q-page-container>
</template>
<style>
  .radius-sm{border-radius:15px;}
</style>
<script>
export default {
  name: 'cadastro'
}

</script>
