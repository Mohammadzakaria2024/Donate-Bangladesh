const calcolatebutton = document.getElementById("calcolate");

calcolatebutton.addEventListener("click", function () {

    const mybalanceElement = document.getElementById("mybalance"); 
    const mybalance = parseFloat(mybalanceElement.innerText); 

   
    const donatebalance = parseFloat(document.getElementById("donatebalance").value);

   
    const totaldonatebalanceElement = document.getElementById("totaldonatebalance");
    const totaldonatebalance = parseFloat(totaldonatebalanceElement.innerText);


    
    if (isNaN(donatebalance) || donatebalance <= 0) {
        alert("Invalid Donation Amount!");
        donatebalanceInput.value = ''; 
        return; 
    }  else if (donatebalance > mybalance) {
        alert("You Don't Have Enough Balance!");
        return;
    }
    
   
    const newBalance = mybalance - donatebalance;

    
    const alldonate = totaldonatebalance + donatebalance;

   
    totaldonatebalanceElement.innerText = alldonate;
    mybalanceElement.innerText = newBalance;
    const modal = document.getElementById("my_modal_4");
    modal.showModal();
    const historyItems = document.createElement("div");
    historyItems.classList.add(
        "items-center",
        "mx-auto",
        "font-Manrope",
        "w-9/12",
        "p-8",
        "rounded-md",
        "border-2",
        "border-black",
        "mt-8"
    );

    
    historyItems.innerHTML = `
     <div class="flex font-bold text-2xl"> <h1>${donatebalance.toFixed(2)}</h1>
      <h1>${donatearia}</h1></div>
      <p class=" m-2 font-boldl">${new Date().toDateString()}</p>
    `;

    
    donationHistory.insertBefore(historyItems, donationHistory.firstChild);
  
});


const history = document.getElementById("History");
const donation = document.getElementById("Donation");
const donationHistory = document.getElementById("DonationHistoyr");
const donatearia = document.getElementById("Donatearia").innerText;
const donatebalance = parseFloat(document.getElementById("donatebalance").value);
const mybalanceElement = document.getElementById("mybalance"); 
const mybalance = parseFloat(mybalanceElement.innerText); 


history.addEventListener("click", function () {
    const heddin = document.getElementById("heddin");

    
    heddin.classList.add("hidden");

   
    history.classList.add("p-4", "rounded-md", "bg-lime-400");

   
    donation.classList.remove("bg-lime-400");


    donationHistory.classList.remove("hidden");
});


