var productSelected  = document.getElementById("products").value


var test = document.getElementsByTagName("button");
var buttonClicked = false;
var dateIs;
var amount;
var returnOnInvestment;



const prices = {
   
    ethfli:
    {
    date1: 100,
    date2: 200,
    date3:300
  },
  btcfli:
  {
  date1: 100,
  date2: 200,
  date3:300
},  
 mvi:
{
date1: 100,
date2: 200,
date3:300
},  
 dpi:
{
date1: 100,
date2: 200,
date3:300
},   
bed:
{
date1: 100,
date2: 200,
date3:300
},

dei:
{
date1: 100,
date2: 200,
date3:300
},
}



document.getElementById("products").addEventListener("change", ()=> {
 productSelected = document.getElementById("products").value
 console.log(productSelected)
                                                    
})

document.getElementById("date1").addEventListener("click",()=> {
   
    buttonClicked = true;
    dateIs = "date1";
    alert(dateIs)
})
document.getElementById("date2").addEventListener("click",()=> {
   
    buttonClicked = true;
    dateIs = "date2";
    alert(dateIs)
    
})
document.getElementById("date3").addEventListener("click",()=> {
   
    buttonClicked = true;
    dateIs = "date3";
   alert(dateIs)
    
})

document.getElementById("calculate").addEventListener("click",() => {
    amount  = document.getElementById("amount").value;
    
    if(!amount)
    {
        alert("please enter the amount");
        return;
        
    }
    if(!buttonClicked)
    {
        alert("Select the date");
        return;
    }
    if(amount&&buttonClicked) {
        var price = prices[productSelected][dateIs]
        alert(price)
        // alert(price)
    }

})
