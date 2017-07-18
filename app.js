new Vue({
  el: '#vue-app',
  data: {
    name: 'Carlton',
    job: 'coder',
    age: 51,
    a: 0,
    b: 0,
    x: 0,
    y: 0,
    website: 'http://carltonjoseph.com',
    websiteTag: '<a href="http://carltonjoseph.com">Carltonjoseph.com 1</a>',
    available: false,
    nearby: false,
    error: false,
    success: false,
    characters: ['mario','luigi','yoshi','bowser'],
    ninjas: [
      {name: 'Carlton', age: 51},
      {name: 'Jeffrey', age: 52},
      {name: 'Cheryl', age: 49},
    ]
  },
  methods: {
    addToa: function() {
      console.log('addToa');
      return this.age + this.a;
    },
    addTob: function() {
      console.log('addTob');
      return this.age + this.b;
    },
    logName: function() {

      console.log('You entered a name')
    },
    logAge: function() {
      console.log('You entered a age')
    },
    greet: function(time) {
      this.job;
      return 'Good ' + time + ' ' + this.name;
    },
    add: function(a) {
      this.age += a;
    },
    subtract: function(a) {
      this.age -= a;
    },
    updateXY: function(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    click: function() {
      alert('you clicked me.');
    }
  },
  computed: {
    addToaCp: function() {
      console.log('addToa cp');
      return this.age + this.a;
    },
    addTobCp: function() {
      console.log('addTob cp');
      return this.age + this.b;
    },
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});
