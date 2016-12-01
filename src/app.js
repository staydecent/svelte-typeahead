import TypeAhead from './TypeAhead.html'

window.app = new TypeAhead({
  target: document.querySelector('#app'),
  data: {
    name: 'world'
  }
})
