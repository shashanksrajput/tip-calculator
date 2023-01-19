    function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var choice = document.getElementById("choice").value;
    var numOfPeople = document.getElementById("people").value;
  

    if (billAmt === "" || choice == 0) {
      alert("Please enter values");
      return;
    }
    
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
  
  
    var total = (billAmt * choice) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    

  }
    document.getElementById("calculate").onclick = function() {
    calculateTip();
   };