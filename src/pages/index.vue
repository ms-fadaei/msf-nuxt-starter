<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">{{ input }}</h1>
      <BaseInput class="mt-5 w-100" :value.sync="input" />
      <BaseInput class="mt-4 w-100" theme="dark" :value.sync="input" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: 'msf-nuxt-app'
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
}

.title {
  display: block;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 100px;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  padding-bottom: 15px;
  font-size: 42px;
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>
