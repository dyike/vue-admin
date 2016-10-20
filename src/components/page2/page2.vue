<template>
    <div id="app">
        <h1>点击: {{ $store.state.count }}次, 此数为 {{ evenorodd }}</h1>
        <button clas="btn" @click="addone">+one</button>
        <button class="btn", @click="subtractone">-one</button>
        <button class="btn", @click="addoneIfOdd">当奇数时，加一</button>
        <button class="btn", @click="addoneAsync">1秒后，加一</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'evenorodd'
  ]),
  methods: mapActions([
    'addone',
    'subtractone',
    'addoneIfOdd',
    'addoneAsync'
  ])
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
.btn {
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}
.btn:hover {
  background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;
}
</style>
