import { mount } from '@cypress/vue'

import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    
    mount(HelloWorld, {
      props: { msg }
    })

    // document.querySelector('h1').innerText === msg
    cy.get('h1').should('have.text', msg)
  })
})
