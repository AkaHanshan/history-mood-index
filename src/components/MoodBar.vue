<template>
<div class="content">
  <div class="bar">
    <div class="bar-goal">{{bar.goal}}</div>
    <img class="bar-image" :class="`bar-image__${bar.active ? 'active': ''}`" src="" alt=""/>
  </div>
  <div class="week">
    <span
      class="week-text"
      :class="`week-text__${bar.active ? 'active' : ''}`"
    >
      {{bar.week}}
    </span>
  </div>
</div>
</template>

<script lang="ts">
import { PropType } from 'vue'

export interface BarProps{
  goal: number | null,
  week: string,
  active: boolean
}
export default {

  props: {
    bar: {
      type: Object as PropType<BarProps>,
      default: () => {
        return {
          goal: null,
          week: '',
          active: false
        }
      }
    }
  },
  setup (props:any) {
    console.log(props)
  }
}
</script>

<style scoped>

</style>
