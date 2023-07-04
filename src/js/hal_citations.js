// Fonction pour gérer les popups de citations
export function copyCitation(idDoc, debug = false) {
    const id = "hal-citation-biblatex-" + idDoc;
    const elem = document.getElementById(id); 

    // Copy the text inside the text field
    navigator.clipboard.writeText(elem.innerText);

    if (debug) {
        console.log("Copy text to clipboard")
        console.log(elem.innerText);
    }

    // Display green message for 3 second
    const success = elem.parentElement.querySelector("[id='hal-copy-success']");
    success.classList.remove('hidden')
    success.classList.add('visible');
  
    setTimeout(function() {
        success.classList.add('hidden')
        success.classList.remove('visible');    
    }, 3000); 
}