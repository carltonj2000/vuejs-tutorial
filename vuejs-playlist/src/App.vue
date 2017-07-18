<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'vue app first'
    }
  },
  methods: {
    greeting: function () {
      return 'hay cowboy!';
    }
  }
}
</script>

<style>
</style>
