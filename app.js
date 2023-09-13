let dispalyContainer = document.getElementById("resultContainer");
let inputEl = document.getElementById("userInput");
let submitBtnEl = document.getElementById("submitBtn");
let resultEl = document.getElementById("displayResult");
let copyEl = document.getElementById("svge");

submitBtnEl.onclick = function() {
    let inputLink = inputEl.value;

    if(inputLink === "") {
        copyEl.classList.add("cpy");
        resultEl.textContent = "Please enter a valid link";
        dispalyContainer.classList.remove("displayer");
        return;
    }

    fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink}`)
    .then((response) => response.json())
    .then((resultLink) => {
        copyEl.classList.remove("cpy");
        resultEl.textContent = resultLink.result.short_link;
        dispalyContainer.classList.remove("displayer");

    })
    .catch((error) => {
        resultEl.textContent = "Something went wrong!!! Please try again";   
        dispalyContainer.classList.remove("displayer");
    })

    
}

copyEl.onclick = () => {
    console.log(resultEl.textContent);
    navigator.clipboard.writeText(resultEl.textContent);
    copyEl.textContent = "Copied";
}



        
        
        
        
        
        