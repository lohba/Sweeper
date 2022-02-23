import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const axios = require('axios');

let collection

  async function fetchData() {
    const options = { method: 'GET', headers: { Accept: 'application/json' } }
    const url = axios
      .get('https://api.opensea.io/api/v1/collections?offset=10&limit=5', options)
      .then(
        (response) =>
          // collection = response.data.collections,
          // response.data.collections.map((data, i) => {
          //   console.log('type===>', typeof data.stats)
          // }),
          console.log(
            response.data.collections.sort(function (a, b) {
              return b.stats.count - a.stats.count
            }),
          ),
  
        // console.log(
        //   collection && Object.keys(collection).length, // get the length of an Object
        //   collection,
        // )
      )
      .catch((err) => console.error(err))
  }

  const fetchAssets = () => {
    const options = {
        method: 'GET',
        url: 'https://api.opensea.io/api/v1/assets',
        params: {order_by: 'pk', order_direction: 'desc', limit: '20', offset: '0'},
        headers: {Accept: 'application/json', 'X-API-KEY': process.env.REACT_APP_API_KEY}
      };
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
    //fetchAssets()

    async function filterData() {
      fetchData()
      try {
        const filterData =
          collection &&
          Object.fromEntries(
            await Object.entries(collection).filter(
              ([key, value]) =>
                value ===
                'https://lh3.googleusercontent.com/HfVW0MtQA1SApY0geQvaJuzQI16F8tSGVkXCgPg648oSUtSmUd8TpyBYul2Jd-V3LXv8SwinEiS5DxZpf7jgvnmAyaG_cm9oz7J8TGw=s2500',
            ),
          )
        console.log(filterData ? filterData : 'No filterdata')
      } catch (error) {
        console.log(error)
      }
    }
    //filterData();

ReactDOM.render(<App/>, document.getElementById('root'));