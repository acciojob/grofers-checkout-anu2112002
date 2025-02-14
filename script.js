// Create a button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    let prices = document.querySelectorAll(".price");

    let total = 0;
    prices.forEach(price => {
        total += Number(price.textContent.trim()); // Ensure numeric conversion
    });

    // Remove existing total row if it exists
    let existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for the total price
    let table = document.querySelector("table");
    let newRow = document.createElement("tr");
    newRow.id = "totalRow";

    // Create a single cell spanning two columns
    let totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.style.fontWeight = "bold";
    totalCell.style.textAlign = "center";
    totalCell.id = "ans";  // ✅ Added id="ans" for Cypress test
    totalCell.textContent = `Total Price: Rs ${total}`;

    // Append cell to row and row to table
    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

// Add event listener to button
getSumBtn.addEventListener("click", getSum);
