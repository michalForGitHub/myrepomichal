<template>
<div class="container">
 <div class="row">
    <div class="col-md-6 col-12" v-for="weaterData in dataRes" :key="weaterData.City" >
      <weatherItem :item="weaterData"></weatherItem>
    </div>
 </div> 
</div>
</template>
<script>
import weatherItem from "@/components/weatherItem.vue";
import APIService from "@/services/APIService.js";
import { storageService } from '@/storage.js';
import {LOCAL_STORAGE_KEY} from '@/consts.js';

 export default {
 data() {
     return {
        dataRes:[],  
        location:null,
        gettingLocation: false,
        errorStr:null
      }
   },

   methods:{
      getWeather(){
      const localData =storageService.getData(LOCAL_STORAGE_KEY);
      if(!localData)
        { 
    let dataReq=[
       {Type: 'geographicCoordinates',Value: this.location.coords.latitude+','+ this.location.coords.longitude},
       {Type: 'city',Value:'London'},
    {Type: 'city',Value:'Kiev'},
    {Type: 'city',Value:'Pariz'}
   ];

     APIService.getWeatherForCities(dataReq)     
      .then(res => {
       this.dataRes= res.data;
     
     storageService.storeData(LOCAL_STORAGE_KEY, this.dataRes);
})
 .catch(error => { 
  alert(error);
    });
       }
        else{
          this.dataRes=localData;
        } 
    },
     getLocation()
    {
    //do we support geolocation
    if(!("geolocation" in navigator)) {
    this.errorStr = 'Geolocation is not available.';
      return;
    }
    this.gettingLocation = true;
    navigator.geolocation.getCurrentPosition(pos => {
     this.gettingLocation = false;
     this.location = pos;
     this.getWeather();
   }, err => {
     this.gettingLocation = false;
     this.errorStr = err.message;
   })
    }
},

  beforeMount(){  
   this.getLocation();
     },
   name: "home",
  components: {
      weatherItem
  }
  }
</script>