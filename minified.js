javascript:async function gettotal(n){return new Promise(async e=>{fetch(`https://api.e-food.gr/api/v1/user/orders/history?limit=${n}&offset=5&mode=extended`,{headers:{accept:"application/json, text/plain, */*","accept-language":"el",pragma:"no-cache","sec-ch-ua":\'" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"\',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":\'"Windows"\',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site","x-core-installation-id":"c0f98458-e0f5-4afc-aae7-bde8e0d1a76d","x-core-platform":"web","x-core-session-id":window.app.userSid,"x-core-theme":"default:light","x-core-version":"2.25.15"},referrer:"https://www.e-food.gr/",referrerPolicy:"strict-origin-when-cross-origin",body:null,method:"GET",mode:"cors",credentials:"omit"}).then(async t=>{t.json().then(async t=>{let o=0;if(t.data.orders.forEach(async n=>{o+=n.price}),t.data.hasNext){n>1e4&&o("Too many orders error");const t=await gettotal(2*n);e(t)}e(o)})})})}async function createpopup(n){let e=document.querySelector("head"),t=document.createElement("style");e.appendChild(t),t.innerHTML=mycss;const o=document.querySelector("body"),r=document.createElement("div");r.classList.add("popup"),r.innerHTML=popinnerhtml,o.appendChild(r),r.querySelector(".close").addEventListener("click",()=>{console.log("close"),r.remove()});let i=await gettotal(n);i=i.toFixed(2),r.querySelector(".content").innerHTML=`<p>You have spent <b> ${i} € </b><p>`}let popinnerhtml=\'\n<div class="bar">\n    <span class="bartext">Efood Orders Calculator</span>\n    <div class="close"> <span>✖</span> </div>\n</div>\n<div class="content" style="padding:5px">\n    <b><i>Loading.. </i></b>\n\n    <br><br>\n    <div class="loader">\n\n    </div>\n</div>\n\',mycss="\n.popup{\n    background-color:white;\n    width: 400px;\n    border: 2px solid rgb(0, 0, 0);\n    box-shadow: 10px 10px 5px rgb(0,0,0,0.6 );\n    border-radius: 2px;\n    padding: 0;\n    margin: 0;\n    min-height: 200px;\n    position: fixed;\n    top: 10px;\n    left: calc(50vw - 200px);\n    z-index:1000;\n}\n.bar{\n    padding: 0;\n    margin: 0;\n    width: 396px;\n    height: 40px;\n    background: rgb(238, 238, 238);\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.bartext{\n    font-weight: b;\n    font-size: 20px ;\n    margin:0;\n    padding: 0;\n    display: inline-block;\n}\n.close{\n    background: rgb(255, 198, 198);\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    top:0;\n    right:0px;\n    font-size: 20px;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-left:2px solid rgb(255, 255, 255);\n    cursor: pointer;\n}\n\n.close:hover{\n    background-color: red;\n}\n\n.content{\n    margin-top: 10px;\n    text-align: center;\n    font-size: 20px;\n}\n\n.loader{\n    display: inline-block;\n    border: 4px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 5px solid #3498db;\n    border-left: 5px solid #3498db;\n    width: 20px;\n    height: 20px;\n    animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n",MAX=1e3;createpopup(MAX);