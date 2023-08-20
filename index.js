document.getElementById("Click-1").addEventListener("click",function(){
    const itemOfPrice = document.getElementById("First-Amount");
    const itemOfPriceString = itemOfPrice.innerText;
    const itemPrice = parseFloat(itemOfPriceString);
    
    const InputOfPrice = document.getElementById("Total-Amount");
    const InputOfPriceString = InputOfPrice.innerText
    const InputPrice = parseFloat (InputOfPriceString)

    const calculation = itemPrice + InputPrice
    
    InputOfPrice.innerText = calculation


    const NameOfItem = document.getElementById("first-name");
    const NameOfItemText = NameOfItem.innerText;
    const P = document.createElement('p');
    P.classList.add('text-center', 'gap-5',"mt-5")
    const FlowerName = document.getElementById("Flower-name")
    const count = FlowerName.childElementCount;
    P.innerText= `${count+1}  ${NameOfItemText}`
    FlowerName.appendChild(P)

    const btnApply = document.getElementById("btn-apply");
    if (calculation >= 200) {
        btnApply.removeAttribute("disabled");
    } else {
        btnApply.setAttribute("disabled", "true");
    }
   

})




document.getElementById("Click-2").addEventListener("click",function(){
    const itemOfPrice = document.getElementById("second-amount");
    const itemOfPriceString = itemOfPrice.innerText;
    const itemPrice = parseFloat(itemOfPriceString);
    
    const InputOfPrice = document.getElementById("Total-Amount");
    const InputOfPriceString = InputOfPrice.innerText
    const InputPrice = parseFloat (InputOfPriceString)

    const calculation = itemPrice + InputPrice
    
    InputOfPrice.innerText = calculation

    const NameOfItem = document.getElementById("second-name");
    const NameOfItemText = NameOfItem.innerText;
    const P = document.createElement('p');
    P.classList.add('text-center', 'gap-5',"mt-5")
    const FlowerName = document.getElementById("Flower-name")
    const count = FlowerName.childElementCount;
    P.innerText= `${count+1} ${NameOfItemText}`
    FlowerName.appendChild(P)

    const btnApply = document.getElementById("btn-apply");
    if (calculation >= 200) {
        btnApply.removeAttribute("disabled");
    } else {
        btnApply.setAttribute("disabled", "true");
    }
})


document.getElementById("Click-3").addEventListener("click",function(){
    const itemOfPrice = document.getElementById("third-amount");
    const itemOfPriceString = itemOfPrice.innerText;
    const itemPrice = parseFloat(itemOfPriceString);
    
    const InputOfPrice = document.getElementById("Total-Amount");
    const InputOfPriceString = InputOfPrice.innerText
    const InputPrice = parseFloat (InputOfPriceString)

    const calculation = itemPrice + InputPrice
    
    InputOfPrice.innerText = calculation

    const NameOfItem = document.getElementById("third-name");
    const NameOfItemText = NameOfItem.innerText;
    const P = document.createElement('p');
    P.classList.add('text-center', 'gap-5',"mt-5")
    const FlowerName = document.getElementById("Flower-name")
    const count = FlowerName.childElementCount;
    P.innerText= `${count+1}  ${NameOfItemText}`
    FlowerName.appendChild(P)


    const btnApply = document.getElementById("btn-apply");
    if (calculation >= 200) {
        btnApply.removeAttribute("disabled");
    } else {
        btnApply.setAttribute("disabled", "true");
    }
})


document.getElementById("Click-4").addEventListener("click",function(){
    const itemOfPrice = document.getElementById("fourth-amount");
    const itemOfPriceString = itemOfPrice.innerText;
    const itemPrice = parseFloat(itemOfPriceString);
    
    const InputOfPrice = document.getElementById("Total-Amount");
    const InputOfPriceString = InputOfPrice.innerText
    const InputPrice = parseFloat (InputOfPriceString)

    const calculation = itemPrice + InputPrice
    
    InputOfPrice.innerText = calculation


    const NameOfItem = document.getElementById("fourth-name");
    const NameOfItemText = NameOfItem.innerText;
    const P = document.createElement('p');
    P.classList.add('text-center', 'gap-5',"mt-5")
    const FlowerName = document.getElementById("Flower-name")
    const count = FlowerName.childElementCount;
    P.innerText= `${count+1}  ${NameOfItemText}`
    FlowerName.appendChild(P)

    const btnApply = document.getElementById("btn-apply");
    if (calculation >= 200) {
        btnApply.removeAttribute("disabled");
    } else {
        btnApply.setAttribute("disabled", "true");
    }
   

})



document.getElementById("Click-5").addEventListener("click",function(){
    const itemOfPrice = document.getElementById("fifth-amount");
    const itemOfPriceString = itemOfPrice.innerText;
    const itemPrice = parseFloat(itemOfPriceString);
    
    const InputOfPrice = document.getElementById("Total-Amount");
    const InputOfPriceString = InputOfPrice.innerText
    const InputPrice = parseFloat (InputOfPriceString)

    const calculation = itemPrice + InputPrice
    
    InputOfPrice.innerText = calculation


    const NameOfItem = document.getElementById("fifth-name");
    const NameOfItemText = NameOfItem.innerText;
    const P = document.createElement('p');
    P.classList.add('text-center', 'gap-5',"mt-5")
    const FlowerName = document.getElementById("Flower-name")
    const count = FlowerName.childElementCount;
    P.innerText= `${count+1}  ${NameOfItemText}`
    FlowerName.appendChild(P)

    const btnApply = document.getElementById("btn-apply");
    if (calculation >= 200) {
        btnApply.removeAttribute("disabled");
    } else {
        btnApply.setAttribute("disabled", "true");
    }
   

})


document.getElementById("Click-6").addEventListener("click",function(){
    const itemOfPrice = document.getElementById("sixth-amount");
    const itemOfPriceString = itemOfPrice.innerText;
    const itemPrice = parseFloat(itemOfPriceString);
    
    const InputOfPrice = document.getElementById("Total-Amount");
    const InputOfPriceString = InputOfPrice.innerText
    const InputPrice = parseFloat (InputOfPriceString)

    const calculation = itemPrice + InputPrice
    
    InputOfPrice.innerText = calculation


    const NameOfItem = document.getElementById("sixth-name");
    const NameOfItemText = NameOfItem.innerText;
    const P = document.createElement('p');
    P.classList.add('text-center', 'gap-5',"mt-5")
    const FlowerName = document.getElementById("Flower-name")
    const count = FlowerName.childElementCount;
    P.innerText= `${count+1}  ${NameOfItemText}`
    FlowerName.appendChild(P)


    const btnApply = document.getElementById("btn-apply");
    if (calculation >= 200) {
        btnApply.removeAttribute("disabled");
    } else {
        btnApply.setAttribute("disabled", "true");
    }
   

})



document.getElementById("btn-apply").addEventListener('click',function(){
                              
    const inputOfCouponFiled = document.getElementById("coupon-input")
    const inputValueOfCoupon = inputOfCouponFiled.value;
     
    if(inputValueOfCoupon=="SELL200"){

        const Price = document.getElementById("Total-Amount")
        const ValueOfPriceString = Price.innerText
        const ValueOfPrice = parseFloat(ValueOfPriceString)
        

        const discountPrice = ValueOfPrice - (ValueOfPrice * (20 / 100))
        
        const totalAfterDiscountFiled = document.getElementById("discount-amount")
        const totalAfterDiscount = ValueOfPrice - discountPrice
        totalAfterDiscountFiled.innerText = totalAfterDiscount.toFixed(2)

        const Pay = document.getElementById("discount-total")
        const PayValueOfString = Pay.innerText
        const PayValue = parseFloat(PayValueOfString)
        Pay.innerText = discountPrice
    }else{
        alert("Please Give Us a Valid Coupon")
    }
 
    

})

document.getElementById("GoHome-btn").addEventListener("click", function() {
    location.reload();
});

