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
  
});


const history = document.getElementById("History");
const Donation = document.getElementById("Donation");
const DonationHistoyr = document.getElementById("DonationHistoyr");
const Donatearia = document.getElementById("Donatearia");

history.addEventListener("click", function () {
    const heddin = document.getElementById("heddin");
    heddin.classList.add("hidden");

    

    history.classList.add("p-4", "rounded-md", "bg-lime-400");
    Donation.classList.remove(  "bg-lime-400");
    DonationHistoyr.classList.remove(  "hidden");


    DonationHistoyr.createElement("div");
    new Date()

    
});

console.log(heddin);