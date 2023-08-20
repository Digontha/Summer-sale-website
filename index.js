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
})