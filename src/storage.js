const storeData = (key, value) => {
    try {
      if (typeof value !== 'string') {
        value = JSON.stringify(value);
      }
      localStorage.setItem(key, value);
      return true;
    } catch (e) {
    //  console.log('Error set localStorage', e);
      return false;
    }
  };
  const getData = key => {
    try {
      let value = localStorage.getItem(key);
      value = JSON.parse(value);
      return value;
    } catch (e) {
    //  console.log('Error getting data from localStorage', e);
      return undefined;
    }
  };
  
  export const storageService = {
    storeData,
    getData,
  };
  