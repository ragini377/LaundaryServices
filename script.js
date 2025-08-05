let serialNo = 1;
let total = 0;

const buttons = document.querySelectorAll(".addBtn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const servicename = button.getAttribute("data-name");
       const icon = button.querySelector("ion-icon");

    // Check if service is already in table
    const isAdded = document.querySelector(`#tableBody tr[data-name="${servicename}"]`);

    if (isAdded) {
      removeItem(button);
      button.innerText = "Add Item";
       icon.setAttribute("name", "add-circle-outline");
       icon.classList.remove("icon-red");
         button.appendChild(icon); // Re-append the icon
      button.classList.remove("removeBtn");
      
      
    } else {
      addItem(button);
      button.innerText = "Remove";
      icon.setAttribute("name", "remove-circle-outline");
        icon.classList.add("icon-red");
      button.appendChild(icon); 
      button.classList.add("removeBtn");
      
    }
  });
});

function addItem(button) {
 
  document.getElementById("additemMsgshow").style.display = "none";
  document.getElementById("additemdisplayid").style.display = "block";
 


  const servicename = button.getAttribute("data-name");
  const serviceprice = parseFloat(button.getAttribute("data-price")).toFixed(2);
  const tbody = document.getElementById("tableBody");

  const newRow = document.createElement("tr");
  newRow.setAttribute("data-name", servicename);

  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");
  const cell3 = document.createElement("td");

  cell1.innerText = serialNo;
  cell2.innerText = servicename;
  cell3.innerText = "₹" + serviceprice;

  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);
  tbody.appendChild(newRow);

  total += parseFloat(serviceprice);
  document.getElementById("totalPrice").innerText = "₹" + total.toFixed(2);

  serialNo++;
}

function removeItem(button) {
  const servicename = button.getAttribute("data-name");
  const serviceprice = parseFloat(button.getAttribute("data-price"));
  const tbody = document.getElementById("tableBody");

  const rows = tbody.querySelectorAll("tr");
  rows.forEach((row) => {
    if (row.getAttribute("data-name") === servicename) {
      tbody.removeChild(row);
      total -= serviceprice;

  const bookingConfirm = document.getElementById("booking-confirm");
   bookingConfirm.innerHTML = "";

      
    }
  });

  // Recalculate serial numbers
  serialNo = 1;
  const updatedRows = tbody.querySelectorAll("tr");
  updatedRows.forEach((row) => {
    row.querySelector("td").innerText = serialNo++;
  });

  document.getElementById("totalPrice").innerText = "₹" + total.toFixed(2);
}

