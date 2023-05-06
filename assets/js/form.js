
const addressInput = document.querySelector("input.address");
const addressButton = document.querySelector(".address-img");

const startLocInput = document.querySelector("input.start_loc");
const startLocButton = document.querySelector(".start_loc-img")

const endLocInput = document.querySelector("input.end_loc");
const endLocButton = document.querySelector(".end_loc-img");

const formButton = document.querySelector(".submit");

/**** FUNCTIONS *****/
/***** ******* ******/

function searchAgence(ville){
    collectionAgences.forEach(function(agence){
        if(agence.ville == ville){
            clearInterval(nIntervalId); // on efface la variable pour afficher
            nIntervalId = null;  // le carroussel avec la nouvelle variable
            displayImg(agence);
            displayAgence(agence);
        }
    })
}

/**** CODE *****/
/**** **** *****/
document.addEventListener("DOMContentLoaded", function(){


    addressButton.addEventListener("click", function(){
        addressInput.classList.remove("none");
        document.querySelector("div.address").classList.add("none");
    })

    startLocButton.addEventListener("click", function(){
        startLocInput.classList.remove("none");
        document.querySelector("div.start_loc").classList.add("none");
    })

    endLocButton.addEventListener("click", function(){
        endLocInput.classList.remove("none");
        document.querySelector("div.end_loc").classList.add("none");
    })

    formButton.addEventListener("click", function(event){ // traitement formulaire
        event.preventDefault();
        searchAgence(addressInput.value);
        // console.log(addressInput.value);
        
    })

})
