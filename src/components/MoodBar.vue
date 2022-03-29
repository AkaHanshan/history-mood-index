<template>
<div class="bar-content" @click="activeBar">
  <div class="bar" :class="`bar__${active ? 'active': ''}`"  :style="{height:barHeight + 'rem',background:barColor}">
    <div class="bar-goal">{{bar.goal}}</div>
    <img class="bar-image" :class="`bar-image__${active ? 'active': ''}`" :src="barImg" alt=""/>
  </div>
  <div class="week" :class="[`week__${active ? 'active' : ''}`,`week__${today ? 'today' : ''}`]">
    <span
      class="week-text"
      :class="[`week-text__${bar ? 'active' : ''}`,`week-text__${today?'today':''}`]"
    >
      {{bar.week}}
    </span>
  </div>
</div>
</template>

<script lang="ts">
import { PropType, onMounted, ref } from 'vue'

export interface BarProps{
  goal: number | null,
  week: string,
}
export default {
  props: {
    bar: {
      type: Object as PropType<BarProps>,
      default: () => {
        return {
          goal: null,
          week: ''
        }
      }
    },
    today: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 0
    }
  },
  setup (props:any) {
    let barColor = ''
    const barImg = ref('')
    const active = ref(false)
    if (props.bar?.active === false) {
      if (Number(props.bar.goal) >= 90) {
        barColor = '#FF823C'
        barImg.value = require('../../public/img/high.png')
      } else if (Number(props.bar.goal) === 0) {
        barColor = '#CFCFCF'
        barImg.value = require('../../public/img/zero.png')
      } else {
        barColor = '#52C873'
        barImg.value = require('../../public/img/low.png')
      }
    } else {
      if (Number(props.bar.goal) >= 90) {
        barColor = 'linear-gradient(180deg, #FFA14A 35.42%, #FFCC4A 100%)'
        barImg.value = require('../../public/img/high.png')
      } else {
        barImg.value = require('../../public/img/low-active.png')
        barColor = 'linear-gradient(180deg, #FFA14A 35.42%, #FFCC4A 100%)'
      }
    }
    const barHeight = ref(0.87)
    onMounted(() => {
      setTimeout(() => {
        barHeight.value += Number(props.bar.goal) * 0.02
      }, props.index * 50)
    })
    function activeBar () {
      active.value = !active.value
    }

    return { barColor, barHeight, active, activeBar, barImg }
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
    position: absolute;
    border-radius: .3rem;
    width: .44rem;
    transition: height 1s;
    bottom:1.5rem;
    &__active{
      border: .03rem solid #FFE9D5;
    }
    &-goal{
      color: #FFFFFF;
      font-size: .2rem;
      font-weight: 700;
      margin-top: .13rem;
    }
    &-image{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: .05rem;
      width: .37rem;
      height: .37rem;
      border-radius: 50%;
    }
  }
  .week{
    height: .36rem;
    width: .36rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom:1rem;
    &-text{
      font-size: .18rem;
      color: #2D2F33;
      &__today{
          color: #ffffff;
      }
    }
    &__today{
      background: #2D2F33;
      border-radius: .08rem;
    }
    &__active{
      background: #FFFFFF;
      box-shadow: 0 .04rem .1rem rgba(0, 0, 0, 0.2);
      border-radius: .08rem;
    }
  }
}
</style>
