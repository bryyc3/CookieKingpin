

 let cookieArray= [];//an array of all cookies featured on homepage
 let itemsInCart = [];//holds all of the cookies that are within user's cart
 let cookieNumber = 0;
 let numOfItems = 0;



 async function getProducts(){
    const response = await axios.get('https://cookiekingpin.org/products');
    cookieArray = response.data.products;
    createCookies();//call function that populates cookies onto the page
}
getProducts();
 
 /**************************************** Website manipulation functions *****************************************/
 function createCookies(){
    const section = document.getElementById('cookieSection');

    const cookiesHTML = cookieArray.map((cookie, i) =>{
        return(
            `<div class="cookie_description_container">
                <img src="${cookie.image}" alt="${cookie.name}" class="cookie_item">
                <h4>${cookie.name}</h4>
                <p class = "cookie_description">${cookie.description}</p>
                <button type = "button" class = "add_cart_description" onclick="addItemToCart('display', ${i})">ADD TO CART<br>${cookie.price}</br></button>
            </div>`
        )
    })
    
    section.innerHTML += cookiesHTML.toString();
 }//grabs data about cookies from the server and lists them onto the webpage

 function circleClicked(num){
    cookieNumber = Number(num);//converts parameter value into a number and stores it as the current cookie number
    document.getElementById("cookie_price").textContent = `${cookieArray[cookieNumber].price}`;
    document.getElementById("cookie_flavor").textContent = `${cookieArray[cookieNumber].name}`;
    document.getElementById("cookie_element").src = `${cookieArray[cookieNumber].circImg}`;
    switch(cookieNumber){
        case 0:
            document.getElementById("circle1").style.background = 'linear-gradient(125deg,rgb(211, 199, 91), rgba(194, 194, 94, 0.715), rgba(228, 226, 103, 0.766))';
            document.getElementById("circle2").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle3").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle4").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle5").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle6").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
        break;
        case 1:
            document.getElementById("circle2").style.background = 'linear-gradient(125deg,rgb(211, 199, 91), rgba(194, 194, 94, 0.715), rgba(228, 226, 103, 0.766))';
            document.getElementById("circle1").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle3").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle4").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle5").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle6").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
        break;
        case 2:
            document.getElementById("circle3").style.background = 'linear-gradient(125deg,rgb(211, 199, 91), rgba(194, 194, 94, 0.715), rgba(228, 226, 103, 0.766))';
            document.getElementById("circle2").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle1").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle4").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle5").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle6").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
        break;
        case 3:
            document.getElementById("circle4").style.background = 'linear-gradient(125deg,rgb(211, 199, 91), rgba(194, 194, 94, 0.715), rgba(228, 226, 103, 0.766))';
            document.getElementById("circle2").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle3").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle1").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle5").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle6").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
        break;
        case 4:
            document.getElementById("circle5").style.background = 'linear-gradient(125deg,rgb(211, 199, 91), rgba(194, 194, 94, 0.715), rgba(228, 226, 103, 0.766))';
            document.getElementById("circle2").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle3").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle4").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle1").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle6").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
        break;
        case 5:
            document.getElementById("circle6").style.background = 'linear-gradient(125deg,rgb(211, 199, 91), rgba(194, 194, 94, 0.715), rgba(228, 226, 103, 0.766))';
            document.getElementById("circle2").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle3").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle4").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle5").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';
            document.getElementById("circle1").style.background = 'linear-gradient(125deg,rgb(174, 154, 179), rgb(249, 250, 240), rgb(137, 110, 144))';

    }
}//displays cookie picture, price, name 
    //and changes the circle color that corresponds with the cookie number that is selected


function arrowClicked(operator){
    if(cookieNumber != 0 && operator == '-'){
        cookieNumber -= 1;
    }
    else if(cookieNumber != 5 && operator == '+'){
        cookieNumber += 1;
        
    }
    else if(cookieNumber == 5 && operator == '+'){
        cookieNumber = 0;
    }
    else if(cookieNumber == 0 && operator == '-'){
        cookieNumber = 5;
    }
    circleClicked(cookieNumber);
}//arrows move one cookie forward or backward according to which arrow is clicked 
    //then calls the function to display information and change circle color

function addItemToCart(typeCookie, display){
    if(numOfItems >= 12){
        return;
    }
    let noItems = document.getElementById("noItemsMsg");
    let cartItem;
    let displayNum = display;
    noItems.style.display = "none";

    if(typeCookie === "slider"){
        cartItem = cookieArray[cookieNumber];
    }
    if(typeCookie === "display"){
        cartItem = cookieArray[display];
    }

    if(itemsInCart.length > 0){
        for(let index = 0; index < itemsInCart.length; index++){
            if(cartItem.name == itemsInCart[index].name && cartItem.qty < 12){
                numOfItems += 1;
                document.getElementById("num_of_items").textContent = numOfItems;
                document.getElementById("num_of_items").style.display = "block"
                cartItem.qty = Number(itemsInCart[index].qty);
                itemsInCart[index].qty += Number(1);
                displayQty();
                calculateTotal();
                return;
            }
            if(cartItem.name == itemsInCart[index].name && cartItem.qty >= 12){
                return;
            }
        }
    }//check to see if the cookie is already in the cart and only change the quantity if so
    if(itemsInCart.length < 12){
        numOfItems += 1;
        document.getElementById("num_of_items").textContent = numOfItems;
        document.getElementById("num_of_items").style.display = "block"
        displayItemInCart(cartItem);
        itemsInCart.push(cartItem);
        displayQty();
        calculateTotal();
    }//allow cookie to be added if the limit isnt exceeded
    
}//allows user to see how many items in the cart 
    //and will add cookies to the cart affecting the grand total 

function displayItemInCart(currentItem){
    let checkoutCont = document.getElementById("checkoutItems");
    checkoutCont.innerHTML += 
    `<div class="checkout_cookie_info" id="${currentItem.name}">
        <img src="${currentItem.image}" class="cookie_in_checkout">
        <div class="underline">
            <p class="cookie_name">${currentItem.name}</p>
            <p class="quantity">Qty</p>
            <input type ="number" min="1" max="12" class="cookie_amount" id = "${currentItem.name}_input" onchange = "qtyChanged('${currentItem.name}')">
        </div>
        <p id="cookie_in_checkout_price">${currentItem.price}</p>
        <button class="material-symbols-outlined trash" onclick="removeItem('${currentItem.name}')">delete</button>
    </div>`;
   
}//creates a container that displays all info of the type of cookie and quantity of it


function openCheckout(){
    let cart = document.getElementById("cart");
    cart.style.display = cart.style.display == "block" ? "none" : "block";
}// allows user to open their cart

function removeItem(itemName){
    let itemRemoved = document.getElementById(itemName);
    itemRemoved.remove();
    for(index = 0; index < itemsInCart.length; index++){
        if(itemName === itemsInCart[index].name){
            numOfItems -= itemsInCart[index].qty; 
            itemsInCart[index].qty = 1;
            itemsInCart.splice(index,1);
            calculateTotal();
        }//find specific cookie that is to be removed and take its quantity away from the grand total
    }     
    if(numOfItems <= 0){
        let noItems = document.getElementById("noItemsMsg");
        noItems.style.display = "block";
        document.getElementById("num_of_items").style.display = "none";
        numOfItems = itemsInCart.length;
        if(numOfItems == 0){
            return;
        }
        goThroughCart();
        return;
    }//check if the number of items is at or below zero, if so, is set the number of items to zero and dont display the number of items
    document.getElementById("num_of_items").textContent = numOfItems;
    
}//completely removes specific cookie and all quantities of it from the cart

function qtyChanged(cookieName){
    let cookieInput = document.getElementById(`${cookieName}_input`);
    let coookieInNum = Number(cookieInput.value);
    let tempNumOfItems = 0//stores the hypothetical number of items that would be within the cart if cookie's quantity is changed 
    for(index = 0; index < itemsInCart.length; index++){
        if(cookieName === itemsInCart[index].name){
            tempNumOfItems = numOfItems - itemsInCart[index].qty;
            if(cookieInput.value > 12 || cookieInput.value < 1 || coookieInNum + tempNumOfItems > 12){
                cookieInput.value = itemsInCart[index].qty;
                calculateTotal();
                return;
            };//checks to see if quantity that is being changed will exceed limitations of cart and/or quantity values, if so, dont change the number
            numOfItems -= itemsInCart[index].qty;
            if(numOfItems < 0){
                numOfItems = 0;
            };
            itemsInCart[index].qty = Number(cookieInput.value);
            numOfItems += itemsInCart[index].qty;
            document.getElementById("num_of_items").textContent = numOfItems;
            calculateTotal();
            
            return;
        }
    }
    calculateTotal();
}//checks if user inputted an amount into the quantity box and changes the number of items variable accordingly

function displayQty(){
    for(index = 0; index < itemsInCart.length; index++){
        document.getElementById(`${itemsInCart[index].name}_input`).value = itemsInCart[index].qty;
    };
}//display each of the input boxes numbers(without this function, cookies that are already in the cart wont display their quantities in quantity box)

function calculateTotal(){
    let total = 0.00;
    for(index = 0; index < itemsInCart.length; index++){
        total += Number(itemsInCart[index].qty) * itemsInCart[index].priceNum;
    };//step through every item in the cart, get its quatity and multiply it by the price, add to the total
    let totalDisp = document.getElementById("checkoutTotal"); 
    let priceString = total.toString();
    if(priceString.length < 5 || priceString.length > 5){
        total = total.toFixed(2);
    }//add trailing zeros(for display purposes)
    totalDisp.innerHTML = total;
}//calculate the final total of all cookies in the cart

function initiateCheckout(){
    if (numOfItems == 6 || numOfItems == 12){
        fetch('/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cookieItems: itemsInCart
            })
        }).then(res => {
            if (res.ok) return res.json();
            return res.json().then(json => Promise.reject(json));
        }).then(({ url }) => {
            if (url == null){
                alert("Cart must contain 6 or 12 cookies");
            }
            else{
                window.location = url;
            }
        }).catch(e => {
            console.error(e.error)
        })//make a call to stripe's api to create a checkout session with all of the items in user's cart
    }
    
    else{
        alert("Cart Must Contain 6 or 12 Cookies");
    }
}
/**************************************************************************************************************/

