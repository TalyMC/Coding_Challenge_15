//Task 2 - Adding Risk Items.
function addRiskItem(riskName, riskLevel, department) {
    // Create a new risk card
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard'); // Assign the 'riskCard' class to the new card

    //Task 4- Risk Categorization-------------------------------------------------------
    if (riskLevel === "High") {
        riskCard.style.backgroundColor = "rgb(235, 91, 91)"; //Red for high
    } else if (riskLevel === "Medium") {
        riskCard.style.backgroundColor = "rgb(250, 250, 97)"; //Yellow for medium
    } else if (riskLevel === "Low") {
        riskCard.style.backgroundColor = "rgb(137, 232, 137)"; //Greeen for low
    }
    //End of Task 4---------------------------------------------------------------------

    //Layout for risk card
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p><strong>Risk Level:</strong> ${riskLevel}</p>
        <p><strong>Department:</strong> ${department}</p>
        <button class= "resolve-button">Resolve</button>
    `;

    //Task 3 - Removing Risk Items-----------------------------------------------------
    const resolveButton = riskCard.querySelector('.resolve-button');
    resolveButton.addEventListener('click',() =>{
        riskCard.remove()
    });
    //End of Task 3---------------------------------------------------------------------
    
     //Append
     document.getElementById('riskDashboard').appendChild(riskCard);
}

// Task 5 - Increase Risk Levels
function increaseRiskLevel(currentLvl) {
    if (currentLvl.toLowerCase() === 'low') {
        return 'Medium';
    } else if (currentLvl.toLowerCase() === 'medium') {
        return 'High'; 
    }
    return currentLvl;
}


function updateAllRiskLevels() {
    const riskCards = document.querySelectorAll('.riskCard');
    riskCards.forEach(card => {
        const riskLevelP = card.querySelector('p');
        const currentLevel = riskLevelP.textContent.split(': ')[1]; 
        const newLevel = increaseRiskLevel(currentLevel); 
        riskLevelP.innerHTML = `<strong>Risk Level:</strong> ${newLevel}`;

        // Update the background color
        if (newLevel.toLowerCase() === 'low') {
            card.style.backgroundColor = 'rgb(137, 232, 137)';
        } else if (newLevel.toLowerCase() === 'medium') {
            card.style.backgroundColor = 'rgb(250, 250, 97)';
        } else if (newLevel.toLowerCase() === 'high') {
            card.style.backgroundColor = 'rgb(235, 91, 91)';
        }
    });
}

// Add button to increase risk levels
const increaseRiskButton = document.createElement('button');
    increaseRiskButton.textContent = 'Increase Risk Levels';
    increaseRiskButton.className = 'increase-risk-button';
    increaseRiskButton.addEventListener('click', updateAllRiskLevels);
    
// Append the risk card 
document.getElementById('riskInputForm').appendChild(increaseRiskButton);

//Test Case:
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Employee Retention", "Low", "HR");