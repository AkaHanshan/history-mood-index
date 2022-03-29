<template>
<div class="bar-content">
  <div class="bar"  :style="{height: (Number(bar.goal) * 0.0196 + 0.87) + 'rem',background:barColor}">
    <div class="bar-goal">{{bar.goal}}</div>
    <img class="bar-image" :class="`bar-image__${bar.active ? 'active': ''}`" src="" alt=""/>
  </div>
  <div class="week" :class="[`week__${bar.active ? 'active' : ''}`]">
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
  active: boolean,
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
    },
    today: {
      type: Boolean,
      default: false
    }
  },
  setup (props:any) {
    let barColor = ''
    if (props.bar?.active === false) {
      if (Number(props.bar.goal) >= 90) {
        barColor = '#FF823C'
      } else if (Number(props.bar.goal) === 0) {
        barColor = '#CFCFCF'
      } else barColor = '#52C873'
    } else {
      if (Number(props.bar.goal) >= 90) {
        barColor = 'linear-gradient(180deg, #FFA14A 35.42%, #FFCC4A 100%)'
      } else {
        barColor = 'linear-gradient(180deg, #FFA14A 35.42%, #FFCC4A 100%)'
      }
    }
    return { barColor }
  }
}
</script>

<style lang="less" scoped>
.bar-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: .44rem;
  .bar{
    border-radius: .3rem;
    width: .44rem;
    &-goal{
      color: #FFFFFF;
      font-size: .2rem;
      font-weight: 700;
      margin-top: .13rem;
    }
  }
  .week{
    height: .36rem;
    width: .36rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &-text{
      font-size: .18rem;
      color: #2D2F33;
    }
  }
}
</style>
