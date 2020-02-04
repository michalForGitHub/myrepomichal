<template>
 <div class="list-group-item rounded-lg mt-4">
      <div class="body">
     
       <h3 class="title">{{ itemw.City }}</h3>
           <div>country:</div>
            <div>{{ itemw.MoreDetails.split(',')[1]}}</div>
        <div>{{itemw.Temp }}°</div> 
        <div>{{ itemw.SummaryDescription }}</div>
            <div>wind:</div>
            <div>{{ itemw.MoreDetails.split(',')[0]}}</div>
           <div>Pressure:</div>
            <div>{{ itemw.Pressure}}</div>
              <div>Humidity:</div>
            <div>{{ itemw.Humidity}}</div>
      </div>
        </div>
</template>
<script>
import { storageService } from '@/storage.js';
import {LOCAL_STORAGE_KEY} from '@/consts.js';

export default {
  name: 'weatherDetail',
  props: {
    City: {
      type: String,
      default: '',
    },
     itemw:Object
  },
  components: {
  },
  data() {
     return {
        item:Object

      }
   },

     methods:{
      getCityWeatherData(city){
      const localData =storageService.getData(LOCAL_STORAGE_KEY);
      if(localData)
        {
         this.itemw = localData.filter(c => c.City == city)[0];
   }
     
    },
},

    created() {
    this.getCityWeatherData(this.$route.params.City);
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 0;
  flex-wrap: wrap;
}
</style>
