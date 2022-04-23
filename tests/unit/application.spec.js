import { mount } from '@cypress/vue'

import App from '@/App.vue'

describe('HelloWorld.vue', () => {
  it('renders the app', () => {
    const msg = 'new message'
    
    mount(App, {
      props: {}
    })

    // document.querySelector('h1').innerText === msg
    cy.get('h1').should('have.text', msg)
  })
})
