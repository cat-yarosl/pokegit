import React, {useEffect} from 'react';

const useAsyncFetch = function (url, options, thenFun, catchFun ) {
  let update = options.body;
  async function fetchData(options) {
    let response = await fetch(url);
    let json = await response.json();

    thenFun(json);
  }
  
  useEffect(function () {
    console.log("Calling fetch, update is: ", update);
    fetchData(options);
  }, [update]);

}

export default useAsyncFetch;