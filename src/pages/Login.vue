<template>
  <q-page-container class="text-center text-white q-pa-lg login-page gradient">
      <div class="text-h5 text-weight-bold">Seja Bem-Vindo</div>
      <div class="q-pt-lg q-pb-md">
        <p class="text-body1">Com o <b>Descarte Remédios</b> você garante um descarte correto aos medicamentos, preserva o meio ambiente, <b>protege quem você ama e ainda acumula pontos</b>.</p>
      </div>
      <div class="bg-white q-pa-md radius-sm shadow-up">
        <q-input class="q-mt-lg" rounded outlined v-model="text" label="Usuário" />
        <q-input class="q-mt-lg" rounded outlined v-model="text" label="Senha" />
        <q-btn class="full-width q-mt-lg q-pa-md" unelevated rounded color="negative" label="Enviar" />
        <div class="q-pa-lg text-green-9 text-weight-bold text-body1" color="green">Esqueci a senha</div>
        <div class="row flex-center q-pa-none">
            <div class="col-6">
              <router-link to="/cadastro">
                <q-btn class="full-width q-pa-md" unelevated rounded color="negative" label="Cadastre-se" />
              </router-link>
            </div>
            <div class="col-3">
              <q-btn round><img alt="Login com Google" src="statics/icons/LoginGoogle.svg"></q-btn>
            </div>
            <div class="col-3">
              <q-btn round><img alt="Login com Facebook" src="statics/icons/LoginFacebook.svg"></q-btn>
            </div>
        </div>
      </div>
  </q-page-container>
</template>
<style>
  .gradient{background-image: linear-gradient(#82BE7E, #A3D26A, #B4DB5E)}
  .radius-sm{border-radius:15px;}
  .q-field--outlined.q-field--rounded .q-field__control {background-color: #E8E8E8;}
</style>
<script>
export default {
  name: 'login'
}

</script>
