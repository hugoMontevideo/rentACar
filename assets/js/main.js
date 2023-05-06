const carrousselDisplayImg = document.querySelector(".img_voiture img");

// voitures
let vehicule1 = {
    make : 'Peugeot',
    model : '208',
    description : 'Diesel, 5 portes, GPS, AutoRadio, Forfait 1000km(0,5/km supplémentaire)',
    prix : '999 €',
    src : 'assets/img/vehicule1.png'
}
let vehicule2 = {
    make : 'Ford',
    model : 'Focus',
    description : 'Diesel, 5 portes, GPS, AutoRadio, Forfait 1000km(0,5/km supplémentaire)',
    prix : '999 €',
    src : 'assets/img/vehicule2.png'
}
let vehicule3 = {
    make : 'Audi',
    model : 'A1',
    description : 'Diesel, 5 portes, GPS, AutoRadio, Forfait 1000km(0,5/km supplémentaire)',
    prix : '1100 €',
    src : 'assets/img/vehicule3.png'
}
let vehicule4 = {
    make : 'Opel',
    model : 'Mokka',
    description : 'Diesel, 5 portes, GPS, AutoRadio, Forfait 1000km(0,5/km supplémentaire)',
    prix : '1150 €',
    src : 'assets/img/vehicule4.png'
}

const collectionVehicules = [ vehicule1, vehicule2, vehicule3, vehicule4 ];
//agences
let AgenceParis = {
    ville : 'Paris',
    adresse : '300 boulevard de Vaugirard, 75015, Paris',
    horaires : 'Ouvert 7j/7 de 09h à 13h et de 14h à 20h',
    phone : '01 49 78 21 33',
    mail : 'contact@vtc.com',
    src : 'assets/img/agence.jpg',
    vehicules : collectionVehicules
}

let AgenceMarseille = {
    ville : 'Marseille',
    adresse : '300 boulevard du Prado, 13001, Marseille',
    horaires : 'Ouvert 7j/7 de 09h à 13h et de 14h à 20h',
    phone : '04 49 78 21 33',
    mail : 'contact@vtcMarseille.com',
    src : 'assets/img/agence.jpg',
    vehicules : collectionVehicules
}

let AgenceAix = {
    ville : 'Aix-en-Provence',
    adresse : '300 boulevard Mirabeau, 13100, Aix-en-Provence',
    horaires : 'Ouvert 7j/7 de 09h à 13h et de 14h à 20h',
    phone : '04 42 78 21 33',
    mail : 'contact@vtcAix.com',
    src : 'assets/img/agence.jpg',
    vehicules : collectionVehicules
}


const collectionAgences = [AgenceParis, AgenceMarseille, AgenceAix];

let i = 1;
let nIntervalId;

/**** FUNCTIONS *****/
/***** ******* ******/


function displayImg(agence){
    if(!nIntervalId){
        // carroussel est executée tous les 2s
        nIntervalId = setInterval(carroussel, 2000, agence); 
    }
}
function carroussel(agence){
    // console.log(agence);
    carrousselDisplayImg.src = agence.vehicules[i].src;
    displayInfos(agence);    
    i+=1;
    if( i>3 ){ i = 0;}  
}
function displayInfos(agence){
    document.querySelector(".marque h1").innerHTML = `${agence.vehicules[i].make} ${agence.vehicules[i].model} ` ;
    document.querySelector(".marque .description").innerHTML = `${agence.vehicules[i].description}`;
    document.querySelector(".marque .prix").innerHTML = `${agence.vehicules[i].prix} - Agence : ${agence.ville}`;
    // document.querySelector(".marque .prix").innerHTML = `${collectionVehicules[i].prix} - ${collectionVehicules[i].agence}`;
}

function carrousselBefore(){
    i -= 1;
    if( i<0 ){ i = 3 };
    carrousselDisplayImg.src = collectionVehicules[i].src;
    displayInfos();    
}

function carrousselNext(){
    i += 1;
    if( i>3 ){ i = 0 };
    carrousselDisplayImg.src = collectionVehicules[i].src;
    displayInfos();    
}

function displayAgence(agence){
    document.querySelector(".agence img").src = agence.src;
    document.querySelector(".agence .ville").innerHTML = `${agence.ville}`;
    document.querySelector(".agence .adresse").innerHTML = `${agence.adresse}`;
    document.querySelector(".agence .horaires").innerHTML = `${agence.horaires}`;
    document.querySelector(".agence .phone").innerHTML = `${agence.phone}`;
    document.querySelector(".agence .mail").innerHTML = `${agence.mail}`;
    displayResult(agence);
}
function displayResult(agence){
    // var agence11 = agence.vehicules
    // console.log(agence11.length)
    document.querySelector(".carroussel .nb_resultats").innerHTML = `${agence.vehicules.length} résultats`
}

/**** CODE *****/
/**** **** *****/
document.addEventListener("DOMContentLoaded", function(){

    // lancer le diaporama auto
    displayImg(AgenceParis);
    // afficher voiture anterieur
    document.querySelector(".before").addEventListener("click", carrousselBefore);
    // afficher voiture suivante
    document.querySelector(".next").addEventListener("click", carrousselNext);

    // afficher l'agence
    displayAgence(AgenceParis);



})