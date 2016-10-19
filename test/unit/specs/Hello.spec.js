import Vue from 'vue'
import Hello from 'src/components/Hello'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
<<<<<<< HEAD
      el: document.createElement('div'),
      render: (h) => h(Hello)
    })
    expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Hello Vue!')
=======
      template: '<div><hello></hello></div>',
      components: { Hello }
    }).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent).to.contain('Hello World!')
>>>>>>> 6acfd24917cff792dfc4cf5556bff16d48bd0ba2
  })
})
