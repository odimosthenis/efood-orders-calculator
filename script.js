
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
          console.log(sum);
          popup(sum)
      });
  });
let barcss=`
    height: 20px;
    border-radius : 3px 3px 0px 0px;
    background: rgb(238, 238, 238);
`
let popcss=`
position:fixed;
top:50px;
left:40%;
background-color:white;
width : 200px;
height : 100px;
border-radius : 3px;
box-shadow : 2px 2px 4px 4px grey;
z-index: 10;
`;

let xcss = `
width: 20px;
height: inherit;
background: rgb(247, 148, 148);
z-index: 10;
float: right;
border-radius : 0px 3px 0px 0px;
`
function createpopup(){
    const body = document.querySelector('body');

    const pop = document.createElement('div')
    pop.classList.add('popup')
    pop.style = `${popcss}`
    pop.innerHTML = `
    <div class="bar" style='${barcss}'>
        <span class='${xcss}'>Efood Bookmarklet</span>
        <div class="close">✖</div>
        <div class="content" style="padding:5px">
            <b><i>Loading.. </i></b>
        </div>
    </div>
    `;
    body.appendChild(pop)
}  

  // Create the popup 
var style_str = `
.popup {
    width : 200px;
    height : 100px;
    border-radius : 3px;
    box-shadow : 2px 2px 4px 4px grey;
    position :fixed;
    top : 10%;
    left : 50%;
    margin-left : -100px;
    margin-top : -50px;
    z-index : 100;  
    text-align: center;
    padding: 0px 0px;
    background: white;
} 

.bar{
    height: 20px;
    border-radius : 3px 3px 0px 0px;
    background: rgb(238, 238, 238);
}

.close{
    width: 20px;
    height: inherit;
    background: rgb(247, 148, 148);
    z-index: 10;
    float: right;
    border-radius : 0px 3px 0px 0px;
}

.close:hover{
    background: red;
}

.content{
    padding: 5px 5px;
}   
} 
`

function popup(sum){

    if (document.querySelectorAll('.popup')>0){
        let p = document.querySelectorAll('.popup');
        p.forEach(e=>{
            e.remove()
        })
    }

    let head = document.querySelector("head");
    let style = document.createElement("style");
    head.appendChild(style)
    style.innerHTML= style_str;
    
    let popup = document.createElement("div");
    popup.innerHTML = `
    <div class="bar">
            Efood Bookmarklet
                <div class="close">✖</div>
    
            </div>
            <div class="content">
                <b><i>Loading.. </i></b>
            </div>
            `
    console.log(popup)
    popup.classList.add("popup")
    document.querySelector("body").appendChild(popup)

    let close_btn = document.querySelector(".close");
    close_btn.addEventListener("click", ()=>{
        popup.remove()
        console.log("removes: ", popup)
    })
    popup.querySelector(".content").innerHTML = ` Your Total Price: <br> <i> <b> ${sum.toFixed(2)} </b> </i> <br> click to close `



}