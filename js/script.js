const price = document.getElementById('price');
const shippingCharge = document.getElementById('shipping_charge');
const totalCartAmount = document.getElementById('total-cart-amount');
const dry = document.getElementById('dry')


const decreaseNumber = (inputValue, productValue) => {
    var textBox = document.getElementById(inputValue);
    var productPrice = document.getElementById(productValue);

    if(textBox.value <= 0){
        textBox.value = 0;
        textBox.style.background = "red";
        alert("Minimum quantity value 1");
    }else{
        textBox.value = parseInt(textBox.value) - 1;
        textBox.style.background = "transparent";
        productPrice.innerHTML = parseInt(productPrice.innerHTML) - 15;
        price.innerHTML = parseInt(price.innerHTML) - 15;
        totalCartAmount.innerHTML = parseInt(shippingCharge.innerHTML)+ parseInt( price.innerHTML) ;
    }
}

const increaseNumber = (inputValue, productValue) => {
    var textBox = document.getElementById(inputValue);
    var productPrice = document.getElementById(productValue)
    
  
    if(textBox.value >= 5){
        textBox.value = 5;
        textBox.style.background = "red";
        alert("Maximum quantity value 5")
    }else{
        textBox.value = parseInt(textBox.value) +1;
        textBox.style.background = "transparent";
        productPrice.innerHTML = parseInt(productPrice.innerHTML) + 15;
        price.innerHTML = parseInt(price.innerHTML) + 15;
        totalCartAmount.innerHTML = parseInt(shippingCharge.innerHTML)+ parseInt( price.innerHTML) ;
    }
}

function discount_code() {
    const discountCode = document.getElementById('discount_code1');
    const error = document.getElementById('error_trw')
  

    if(discountCode.value=== "noyon"){
        totalCartAmount.innerHTML = parseInt(totalCartAmount.innerHTML) -15;
        error.innerHTML = "You have received $15 discount"
       
        if(totalCartAmount.innerHTML <= 0){
            totalCartAmount.innerHTML = "00"
        }

        if(discountCode.value=== "noyon"){
            discountCode.value = " ";
        }

    }else{
        error.innerHTML = "You cuppon is totally wrong"
    }s
}