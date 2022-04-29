
// function find the sum
function gettotal(){
    return new Promise( res=>{
        fetch("https://api.e-food.gr/api/v1/user/orders/history?limit=1000&offset=5&mode=extended", {
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
          }).then(response=>{
              response.json().then(obj=>{
                  let sum=0;
                  obj.data.orders.forEach(order=>{
                      sum+=order.price;
                  });
                 res(sum)
              });
          });
    })
    
}

// display
async function createpopup(){
    // insert the css rules
    let head = document.querySelector("head");
    let style = document.createElement("style");
    head.appendChild(style)
    style.innerHTML= mycss;

    // create pop
    const body = document.querySelector('body');
    const pop = document.createElement('div')
    pop.classList.add('popup')
    pop.innerHTML = popinnerhtml;
    body.appendChild(pop);

    // create the close btn
    const close = pop.querySelector('.close');
    close.addEventListener('click', ()=>{
        console.log('close');
        pop.remove();
    });

    let total = await gettotal();
    total = total.toFixed(2)

    // update popup
    pop.querySelector('.content')
    .innerHTML = `<p>Your Total is: ${total} € `


}



let popinnerhtml = `
<div class="bar">
    <span class='bartext'>Efood Calculator</span>
    <div class="close"> <span>✖</span> </div>
</div>
<div class="content" style="padding:5px">
    <b><i>Loading.. </i></b>

    <br><br>
    <div class="loader">

    </div>
</div>
`

let mycss = `
.popup{
    background-color:white;
    width: 400px;
    border: 2px solid rgb(0, 0, 0);
    box-shadow: 10px 10px 5px rgb(0,0,0,0.6 );
    border-radius: 2px;
    padding: 0;
    margin: 0;
    min-height: 200px;
    position: fixed;
    top: 10px;
    left: calc(50vw - 200px);
    z-index:1000;
}
.bar{
    padding: 0;
    margin: 0;
    width: 396px;
    height: 40px;
    background: rgb(238, 238, 238);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bartext{
    font-weight: b;
    font-size: 20px ;
    margin:0;
    padding: 0;
    display: inline-block;
}
.close{
    background: rgb(255, 198, 198);
    position: absolute;
    width: 40px;
    height: 40px;
    top:0;
    right:0px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left:2px solid rgb(255, 255, 255);
    cursor: pointer;
}

.close:hover{
    background-color: red;
}

.content{
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
}

.loader{
    display: inline-block;
    border: 4px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid #3498db;
    border-left: 5px solid #3498db;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`