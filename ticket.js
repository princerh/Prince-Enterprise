console.log("connected");
let seatSelectNumber = 0;
let totalBDT = 0;
const seatButtons = document.querySelectorAll(".buttons");
for(let i = 0; i < seatButtons.length; i++){
    const seatName = seatButtons[i];
    seatName.addEventListener("click", function(event){
        const seatNo = event.target.innerText;
        seatSelectNumber++;
        event.target.style.backgroundColor = "#1DD100";
        event.target.style.color = "white";
        


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

nextButtonAbling(phoneNumber, seatSelectNumber);    


        
        
    })
   
}

document.getElementById("phoneNumber").addEventListener("change", function(e){
const phoneNumber = e.target.value; 
nextButtonAbling(phoneNumber, seatSelectNumber);
})

// function for clearing disability of next button 
function nextButtonAbling(phoneNumber, seatSelectNumber){
    if(phoneNumber && seatSelectNumber){
        document.getElementById("next").removeAttribute("disabled");
    }
}



// get id and set innerText
function setInnerTextByID(elementId, noOfselecteds){
document.getElementById(elementId).innerText = noOfselecteds;
}

// create element and set inner text by id 
function createTagAndSetInnerText(id, INNERTEXT){
    const parentElement = document.getElementById(id);
    const tagVariable = document.createElement("p");
    tagVariable.innerText = INNERTEXT;
    parentElement.appendChild(tagVariable);
}

