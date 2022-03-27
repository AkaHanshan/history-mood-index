<template>
 <div class="header">
   <div class="user-info">
     <div class="user-info__avatar"><img :src="user.avatar"/></div>
     <div class="user-info__name">{{user.name || '高雄'}}</div>
   </div>
   <div class="user-index">
     <span class="user-index__score">{{averageIndex}}</span>
     <span class="user-index__tips">周平均心情指数</span>
   </div>
 </div>
</template>

<script lang="ts">
import { setup } from 'vue-class-component'
import { PropType } from 'vue'
export interface User {
  name: string | undefined,
  avatar: string | undefined
}
export default {
  props: {
    user: {
      type: Object as PropType<User>,
      default: () => {
        return {
          name: '',
          avatar: require('../../public/img/head.png')
        }
      }
    },
    averageIndex: {
      type: Number,
      default: 0
    }
  },
  setup (props: any) {
    console.log(props)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header{
  height: 5.95rem;
  width: 9.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px -0.15rem 0.4rem rgba(0, 0, 0, 0.15);
  border-radius: 0.6rem;
  .user-info{
    width: 2.2rem;
    height: 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    &__avatar{
      height: 0.9rem;
      width: 0.9rem;
      border-radius: 50%;
    }
    &__name{
      font-size: 0.5rem;
      color: #2D2F33;

    }
  }
  .user-index{
    display: flex;
    align-items: center;
    flex-direction: column;
    &__score{
      font-size: 1.8rem;
      font-weight: 800;
      color: #2D2F33;
    }
    &__tips{
      font-size: 0.45rem;
      color: #929292;
      letter-spacing: 0.0075rem;
    }
  }
}
</style>
