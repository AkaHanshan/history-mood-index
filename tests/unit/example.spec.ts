import { shallowMount } from '@vue/test-utils'
import MoodHeader from '@/components/MoodHeader.vue'

describe('MoodHeader.vue', () => {
  it('renders props when passed', () => {
    const headerProps = {
      user: {
        name: '',
        avatar: require('../../public/img/head.png')
      },
      averageIndex: 0
    }
    const wrapper = shallowMount(MoodHeader, {
      props: {
        user: {
          name: '',
          avatar: require('../../public/img/head.png')
        },
        averageIndex: 0
      }
    })

    expect(wrapper).toEqual(headerProps)
  })
})
