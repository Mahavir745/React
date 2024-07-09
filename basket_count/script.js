let right = document.querySelector(".right-arrow")
let left = document.querySelector(".left-arrow")

let count=10
let i=0
right.addEventListener("click",function(){
    addBasket = document.querySelector(".basket-2 span")
    removeBasket = document.querySelector(".basket-1 span")

    if(count>=1){
    removeBasket.innerHTML = count - 1
    count--
    }else{
        removeBasket.innerHTML = "Empty"
    }

    if(i!=10){
    addBasket.innerHTML = i+1
    i++
    }
    else{
        addBasket.innerHTML = "Full"
    }
})

left.addEventListener("click",function(){
    addBasket = document.querySelector(".basket-2 span")
    removeBasket = document.querySelector(".basket-1 span")

    
    if(count!=10){
    removeBasket.innerHTML = count + 1
    count++
    }else{
        removeBasket.innerHTML = "Full"
    }


    
    if(i!=0){
    addBasket.innerHTML = i-1
    i--
    }else{
        addBasket.innerHTML = "Empty"
    }
})