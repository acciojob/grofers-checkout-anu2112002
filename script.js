// Create a button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all elements with the class 'price'
    let prices = document.querySelectorAll(".price");

    let total = 0;

    // Loop through all price elements and sum the values
    prices.forEach(price => {
        total += Number(price.textContent.trim()); // Ensure conversion to number
    });

    // Check if the total row already exists, if so, remove it to avoid duplicates
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
    totalCell.colSpan = 2; // Merge both columns
    totalCell.style.fontWeight = "bold";
    totalCell.style.textAlign = "center";
    totalCell.textContent = `Total Price: Rs ${total}`;

    // Append cell to row and row to table
    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

// Add an event listener to the button
getSumBtn.addEventListener("click", getSum);
