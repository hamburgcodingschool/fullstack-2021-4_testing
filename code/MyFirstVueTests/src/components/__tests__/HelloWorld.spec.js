import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    
    const wrapper = mount(HelloWorld, { props: { msg: 'Bob' } })
    const actualGreeting = wrapper.find("h1").text();
    
    expect(actualGreeting).toBe(`Hello Bob!`)
  })
})
