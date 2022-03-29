<template>
  <div class="content">
    <TopTitle/>
    <MoodHeader />
    <MoodBarContent/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MoodHeader from './components/MoodHeader.vue'
import TopTitle from './components/TopTitle.vue'
import MoodBarContent from './components/MoodBarContent.vue'

@Options({
  components: {
    MoodHeader,
    TopTitle,
    MoodBarContent
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
