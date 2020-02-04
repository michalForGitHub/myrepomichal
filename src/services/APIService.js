import axios from "axios";
import { APIPath } from "@/consts";


export default {



 getWeatherForCities(data){
  try {
    return axios.post(APIPath,data);

   // return response.data;
  } catch (error) {
   
    return null;
  }
}
}


