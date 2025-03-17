//Task 2 - Adding Risk Items.
function addRiskItem(riskName, riskLevel, department) {
    // Create a new risk card
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard'); // Assign the 'riskCard' class to the new card

    //Layout for risk card
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p><strong>Risk Level:</strong> ${riskLevel}</p>
        <p><strong>Department:</strong> ${department}</p>
        <button class= "resolve-button">Resolve</button>
    `;

    //Task 3 - Removing Risk Items-----------------------------------------------------
    const resolveButton = riskCard.querySelector('.resolve-button');
    resolveButton.addEventListener('click',(event) =>{
        riskCard.remove()
    });
    //End of Task 3---------------------------------------------------------------------
    
    // Append the risk card 
    document.getElementById('riskDashboard').appendChild(riskCard);
}

//Test Case:
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");