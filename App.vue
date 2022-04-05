<template>
  <div id="app" class="container">
    
    
    
    <div class="container">
    <HelloWorld/>
    </div>
    
    
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      seen:true,
      
      getMenuItems:{
                1: {
  'name': 'Margherita',
  'description': 'A delicious tomato based pizza topped with mozzarella',
  'options': [{
    'size': 9,
    'price': 6.95
  }, {
    'size': 12,
    'price': 10.95
  }]
},
2: {
  'name': 'Pepperoni',
  'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
  'options': [{
    'size': 9,
    'price': 7.95
  }, {
    'size': 12,
    'price': 12.95
  }]
},
3: {
  'name': 'Ham and Pineapple',
  'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
  'options': [{
    'size': 9,
    'price': 7.95
  }, {
    'size': 12,
    'price': 12.95
  }]

}
      }
    }
  },
  components: {
    HelloWorld
  },
  
      methods: {
        
        
          
        
      },
    
  
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

.scrollable{
  overflow-y: scroll;
}
.scrollv{
  height: 20px;
}
.scroll{
  height: 400px;
}

.left{
  float: left;
}
.right{
  float: right;
}
</style>
