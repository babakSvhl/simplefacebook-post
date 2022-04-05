<template>
  <div class="card">
    
    <div class="container row">
      <div class="card header">
          <h2>whats in your mind</h2>
      </div>
      <div class="card body">
         <input class="form-control" 
         placeholder="Write Here..." v-model="txtitem"/>

      <div class="btnend">
      <button class="btn btn-primary btnend glow"
      @click="addpost" type="button">Post</button>
      </div>
      
         
      </div>
    </div>
   <div class="center">
      <div class="card cardsize" v-for="item in post" :key="item.id">
        <div class="card-header">
          <h4 class="starth">babak</h4>
        </div>
        <div class="card-body bodyform">
           <textarea v-model="item.name"></textarea>
        </div>
        <div>
          <button class="btn btn-outline-primary btnstart">Like</button>
        </div>

      </div>
   </div>
   
   <div class="ah">
   <transition name="alert">
     <div v-if="seen" class="alert-success" >
     <button class="close" type="button" @click="seen=false"></button><h4> با موفقیت پست شد </h4></div>
  </transition>
   </div>
   

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      post:[],
      txtitem:null,
      seen:false
    }
  },

  

  methods: {
    addpost(){
      
      this.post.push({
        name:this.txtitem,
        
      }),
      this.seen=true
      console.log(this.post)
    },
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;

}

.btnend{
  position:relative;
  left: 20%;
}

.starth{
  position: relative;
  right: 20%;
}

.fntsize{
     font-size: 32pt;
}

.cardsize{
  max-width: 500px;
  max-height: 150%;
  
}
.center {
margin: auto;
width: 60%;
padding: 10px;
}

.btnstart{
  position: relative;
  right: 20%;
}

.glow:hover{
animation: glowing 1s infinite;
}


@keyframes glowing{
  0%{
    box-shadow: 0 0 2px #2828ff;
  }
  50%{
    box-shadow: 0 0 15px #2828ff;
  }
  100%{
    box-shadow: 0 0 2px #2828ff;
  }
}

.alert-enter-active{
animation-duration: 1s;
animation-fill-mode: both;
animation-name: slidein;
}
.alert-leave-active{
animation-duration: 1s;
animation-fill-mode: both;
animation-name: slideout;
}
@keyframes slideout{
  from{
    transform: translate3d(0,0,0);
  }
  to{
    visibility: hidden;
    transform: translate3d(100%,0,0);
  }
}
@keyframes slidein{
  from{
    transform: translate3d(100%,0,0);
    visibility: visible;
  }
  to{
    transform: translate3d(0,0,0);
  }
}
.ah{
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>
