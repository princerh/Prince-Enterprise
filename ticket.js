console.log("connected");
let seatSelectNumber = 0;
let totalBDT = 0;
let seatArray = [];
const seatButtons = document.querySelectorAll(".buttons");
for(let i = 0; i < seatButtons.length; i++){
    const seatName = seatButtons[i];
    seatName.addEventListener("click", function(event){
        const seatNo = event.target.innerText;
        

        if(seatArray.includes(seatNo)){
            alert("you cannot select a seat multiple times");
        }
        else{
            seatArray.push(seatNo);
        
            seatSelectNumber++;

if(seatSelectNumber < 5){
    event.target.style.backgroundColor = "#1DD100";
            event.target.style.color = "white";
            
            applyButton(seatSelectNumber);
    
            // get seat left and set the rest 
            const totalSeats = parseInt(document.getElementById("totalSeats").innerText);
            const seatLeft = totalSeats - 1;
            document.getElementById("totalSeats").innerText = seatLeft;
    
    
            createTagAndSetInnerText("seat", seatNo); // id and value to pass
            createTagAndSetInnerText("class", "Economy" );
            createTagAndSetInnerText("price", 550 );
    
            setInnerTextByID("noOfselected", seatSelectNumber);
    
            // get price and add to the total 
            const getPrice = parseInt(document.getElementById("price").lastChild.innerText);
             totalBDT = totalBDT + getPrice;
    // total price 
    setInnerTextByID("totalBDT", totalBDT);
    // grand total price
    setInnerTextByID("grandTotalBDT", totalBDT);
    
    
    
    const phoneNumber = document.getElementById("phoneNumber").value;
    nextButton(phoneNumber, seatSelectNumber);
}

else{
    alert("Sorry! You cannot book more than 4 seats");
}
                
    
        } // else end
        

        
        
    })
   
}




document.getElementById("phoneNumber").addEventListener("keyup", function(e){
const phoneNumber = e.target.value; 
nextButton(phoneNumber, seatSelectNumber);
})



document.getElementById("apply").addEventListener("click", function(){
    const getCoupon = document.getElementById("coupon").value;
    const getConvertedCoupon = getCoupon.toLowerCase().split(" ").join("");
    if(getConvertedCoupon === "new15" || getConvertedCoupon === "couple20"){
        const totalCurrentPrice = parseInt(document.getElementById("totalBDT").innerText);
        if(getConvertedCoupon === "new15"){
            const discount = totalCurrentPrice * 15/100;


            createTagAndSetInnerText("discount", "Discount");
            document.getElementById("discount").classList.remove("hidden");
            
setDiscount("discount", discount);



            const grandtotal = totalCurrentPrice - discount;
            setInnerTextByID("grandTotalBDT", grandtotal);

            const inputLabelField = document.getElementById("inputLabel");
            inputLabelField.classList.add("hidden");
        }
        else{
            const discount = totalCurrentPrice * 20/100;

            

            createTagAndSetInnerText("discount", "Discount");
            document.getElementById("discount").classList.remove("hidden");
            setDiscount("discount", discount);




            const grandtotal = totalCurrentPrice - discount;
            setInnerTextByID("grandTotalBDT", grandtotal);

            const inputLabelField = document.getElementById("inputLabel");
            inputLabelField.classList.add("hidden");
        }
    }
    else{
     alert("You have inserted wrong coupon");
    }
    
})


// function for clearing disability of apply button 
function applyButton(seatSelectNumber){
    if(seatSelectNumber >= 4){
        document.getElementById("apply").removeAttribute("disabled");
    }
    else{
        document.getElementById("apply").setAttribute("disabled", true);
    }
}
// function for clearing disability of next button 
function nextButton(phoneNumber, seatSelectNumber){
    if(phoneNumber && seatSelectNumber){
        document.getElementById("next").removeAttribute("disabled");
    }
    else{
        document.getElementById("next").setAttribute("disabled", true);
    }
}



// get id and set innerText
function setInnerTextByID(elementId, INNERTEXT){
document.getElementById(elementId).innerText = INNERTEXT;
}

// create element and set inner text by id 
function createTagAndSetInnerText(ParentID, INNERTEXT){
    const parentElement = document.getElementById(ParentID);
    const tagVariable = document.createElement("p");
    tagVariable.innerText = INNERTEXT;
    parentElement.appendChild(tagVariable);
}

// function to set discount 
function setDiscount(parentDiv, discount){
    const discountDiv = document.getElementById(parentDiv);
            const bdt = document.createElement("p")
            bdt.innerText = "BDT";
            bdt.style.gap = "1px";
            const spanPrice = document.createElement("span");
            spanPrice.innerText = discount;
            spanPrice.style.marginLeft = "9px";
            bdt.appendChild(spanPrice);
            discountDiv.appendChild(bdt);
}