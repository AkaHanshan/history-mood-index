<template>
  <div class="content">
    <TopTitle/>
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from './components/MoodHeader.vue'
import TopTitle from './components/TopTitle.vue'

@Options({
  components: {
    HelloWorld,
    TopTitle
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
