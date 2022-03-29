<template>
<div class="content">
  <template v-for="(item,index) in list" :key="item.week + index">
    <mood-bar :bar="item" :today="index === today"/>
  </template>
</div>
</template>

<script>
import MoodBar from '@/components/MoodBar'
import { reactive } from 'vue'
import { barList } from '@/dic'
export default {
  components: { MoodBar },
  setup () {
    const list = reactive(barList)
    const today = new Date().getDay()
    return {
      list,
      today
    }
  }
}
</script>

<style lang="less" scoped>
.content{
  margin-top: .02rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
}
</style>
