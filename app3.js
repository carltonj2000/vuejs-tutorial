new Vue({
  el: '#vue-app',
  data: {
    output: 'Your fav food'
  },
  methods: {
    readRefs: function () {
      this.output = this.$refs.input.value;
      console.log(this.$refs.input.value);
      console.log(this.$refs.test.innerText);
    }
  },
  computed: {
  }
});

Vue.component('greeting', {
  template: '<p>I am {{name}}. <button v-on:click="changeName">Change name</button></p>',
  data: function () {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function () {
      this.name =  'Mario';
    }
  }
});

const one = new Vue({
  el: '#vue-app-one',
  data: {
  },
  methods: {
  },
  computed: {
  }
});

const two = new Vue({
  el: '#vue-app-two',
  data: {
  },
  methods: {
  },
  computed: {
  }
});
