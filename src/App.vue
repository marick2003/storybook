<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Selectbox :options="aoptions" v-on:updateselectbox="parentMethod"></Selectbox>
    <!-- synced after "change" instead of "input" -->
    <input v-model.lazy="msg">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Selectbox from './components/Selectbox.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Selectbox
  },
  data:function() {

    return {
        aoptions:[
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ],
        
     }
  },methods:{
    parentMethod(e){ 
      console.log("asdasd:"+e.target.value);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
