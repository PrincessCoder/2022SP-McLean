new Vue({
    el: '#app',
    data: {
      llamaFacts: [
        { fact: 'Llamas are actually from the same family as camels.' },
        { fact: 'Llamas are native to South America.' },
        { fact: 'Llamas do not live in the wild. They are domesticated animals.' },
        { fact: 'Llamas can spit distances of more than 15 feet!' },
        { fact: 'Llamas speak to each other by humming.' },
        { fact: 'Llamas are much more friendly than alpacas.' },
        { fact: 'Llama poop has almost no odor and is a fantastic fuel source for fires and great fertilizer.' },
        { fact: 'Herds of llamas have constantly shifting social structures. They have their own pecking order and males jostle for positions.' },
        { fact: 'Forget about guard dogs, you can have a guard llama. They make great guard animals for herds of sheep and alpaca.' },
        { fact: 'Llamas have now taken on the role of therapy animals.' }
      ],
      status: false
    },
    methods: {
      reveal: function() {
        if (this.status) {
          this.status = false
        } else
          this.status = true
      }
    }
  })