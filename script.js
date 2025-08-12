function showBudgetTool() {
    document.getElementById("budget-tool").style.display = "block";
}

function calculateBudget() {
    let income = parseFloat(document.getElementById("income").value);
    let expenses = parseFloat(document.getElementById("expenses").value);
    
    if (isNaN(income) || isNaN(expenses)) {
        alert("Please enter valid numbers.");
        return;
    }
    
    let savings = income - expenses;
    document.getElementById("budget-result").innerText = 
        savings >= 0 
            ? `You can save ₹${savings} per month 🎉`
            : `You are over budget by ₹${Math.abs(savings)} 😞`;
}

function postStory() {
    let storyText = document.getElementById("story").value.trim();
    
    if (!storyText) {
        alert("Please write something before posting!");
        return;
    }
    
    let storyDiv = document.createElement("div");
    storyDiv.className = "user-story";
    storyDiv.innerText = storyText;
    
    document.getElementById("story-list").appendChild(storyDiv);
    document.getElementById("story").value = "";
}
