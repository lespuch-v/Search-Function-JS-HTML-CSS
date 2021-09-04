document.getElementById("searchField").addEventListener("keyup", function(event){
    let searchQuery = event.target.value
    let allDOMelements = document.getElementsByClassName("item")

    for(let i = 0; i < allDOMelements.length; i++){
        elementName = allDOMelements[i].textContent.toLowerCase()
        
        if(elementName.includes(searchQuery)){
            allDOMelements[i].style.display = ""
        }else{
            allDOMelements[i].style.display = "none"
        }
    }

})