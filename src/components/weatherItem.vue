<template>
  <router-link class="link-hover" :to="{ name: 'weatherDetail', params: {City: item.City}}">
    <div class="list-group-item rounded-lg mt-4">
      <div class="body">
        <div class="col-12">
        <h3 class="title">{{ item.City }}</h3></div>
         <div>{{dt}}</div>
        <div class="temp">{{item.Temp }}°</div>
        <img :src="buildIcon" />
      <div >{{item.Summary }}</div>
       
      </div>
        </div>
     </router-link>
</template>


<script>
import { WEATHERICON } from "@/consts";
export default {
  name: "weatherItem",
   props: { 
     item:Object
  },  data() {
     return {
        dt:String

      }
   },
 methods:{
        getDate: function () {
          return new Date().toLocaleString();
        }
    },
   computed: {
    buildIcon() {
      return `${WEATHERICON}/${this.item.Icon}.png`;
    }
  },
 
   mounted () {
    this.dt=  this.getDate();

    }
}
</script>

<style lang="scss" scoped>
.list-group-item {
 
 background-color: aliceblue;
}
.temp
{
  font-weight: bold;
     font-size: 26px;
}
.link-hover {
  
    text-decoration: none;
    color: black;
  }
  .body {
    padding: 1.25rem;
    min-width: 100px;

    .title {
      font-size: 33px;
      margin-top: 0;
    }
  } 
</style>



