// function find the sum
async function gettotal(MAX){
    return new  Promise( async res=>{
        fetch(`https://api.e-food.gr/api/v1/user/orders/history?limit=${MAX}&offset=0&mode=extended`, {
            "headers": {
              "accept": "application/json, text/plain, */*",
              "accept-language": "el",
              "pragma": "no-cache",
              "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-site",
              "x-core-installation-id": "c0f98458-e0f5-4afc-aae7-bde8e0d1a76d",
              "x-core-platform": "web",
              "x-core-session-id": window.app.userSid, /*  window.app.userCartSid */
              "x-core-theme": "default:light",
              "x-core-version": "2.25.15"
            },
            "referrer": "https://www.e-food.gr/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
          }).then(async response=>{
              response.json().then(async obj=>{
                  count=0;
                  let sum=0;
                  obj.data.orders.forEach(async order=>{
                      count++;
                      sum+=order.price;
                      console.log(order.price)
                  });
                  if (obj.data.hasNext){
                      if(MAX>10000){
                          sum('Too many orders error')
                      }
                      const newsum = await gettotal(MAX*2)
                  }
                  console.log(sum, count)
                 res(sum);
              });
          });
    });
    
};
gettotal(500);