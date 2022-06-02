//Responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalForm = document.querySelectorAll(".modal-form") //Formulaire
const modalBody = document.querySelector(".modal-body")//Contenu de la modale 
const closemodal = document.querySelector (".close");//Croix pour fermer
const lastName = document.getElementById ("last");//Nom
const firstName = document.getElementById ("first");//Prénom
const email = document.getElementById ("email"); // Email
const birthdate = document.getElementById("birthdate"); // Date de Naissance
const quantity = document.getElementById ("quantity"); //Nombre de concours
const validateInput = document.querySelectorAll (".text-control");
const checkbox = document.getElementById ("checkbox1") //Condition de la checkbox
const buttonSubmit = document.getElementById ("button-submit");//Bouton submit
const validationButton = document.getElementById ("validation-button")//Fermer la fenêtre de confirmation
const confirmationForm = document.querySelector (".validation-form")// Confirmation de la validation du formulaire
const confirmationbg = document.querySelector (".validation-bground")

//Evènements

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); //Lancement au clic
closemodal.addEventListener("click", closeModal); //Fermeture de la modale au clic sur la croix
validationButton.addEventListener ("click", closeConfirm); // Fermeture de la fenêtre de validation
buttonSubmit.addEventListener("click", ValidationForm); //Validation du formulaire


// lancement de la modale

function launchModal()
{
  modalbg.style.display = "block";
  
}

//Fermeture de la modale
function closeModal()
{
  modalbg.style.display= "none";
}

//Confirmation de la fermeture de la modale

function closeConfirm() {
  modalbg.style.display= "none";
  confirmationbg.style.display= "none";
}

//Erreurs
const errorLast= document.querySelector (".error-last")//Nom erreur
const errorFirst = document.querySelector (".error-first"); //Prénom erreur 
const errorEmail = document.querySelector (".error-email"); // Email erreur
const errorBirthdate = document.querySelector (".error-birthdate"); //Date erreur
const errorQuantity = document.querySelector (".error-quantity"); // Erreur nombre
const errorCheckbox = document.querySelector (".error-checkbox"); //Erreur checkbox
const errorSubmit = document.querySelector (".error-submit"); // Erreur soumission


//Formulaire Validation Prénom

function ValidationFirstname ()
{
  
  if (firstName.value.length > 1 && (firstName.value)) {//Si le nombre est supérieur à 1
    
    firstName.classList.remove ("error-input");
    errorFirst.style.display = "none";
    return true; //Champs Valide
    
  }
  else{

    firstName.classList.add ("error-input");
    errorFirst.style.display = "block";
    errorFirst.innerHTML = "Veuillez entrer au moins 2 caractères"; //Message d'erreur
    /*firstName.style.border = "2px solid #FE152E"; //La bordure change au rouge*/
    return false; //Champs Invalide
  }

}

//Formulaire Validation Nom

function ValidationLastname ()
{
  
  if (lastName.value.length > 1 && (lastName.value)) {//Si le nombre est supérieur à 1
    
    lastName.classList.remove ("error-input");
    errorLast.style.display = "none";
    return true; //Champs Valide
  }
  else{
    lastName.classList.add ("error-input");
    errorLast.style.display = "block";
    errorLast.innerHTML = "Veuillez entrer au moins 2 caractères"; //Message d'erreur
    
    //lastName.style.border = "2px solid #FE152E"; //La bordure change au rouge
    return false; //Champs Invalide
  }

}




//Formulaire Validation Email

function ValidationEmail ()
{
  let emailregExp = new RegExp (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  
  

  if (emailregExp.test(email.value)){

    email.classList.remove ("error-input");
    errorEmail.style.display = "none";
    return true;

  } else {
   
    email.classList.add ("error-input");
    errorEmail.style.display = "block" ;
    errorEmail.innerHTML = "Adresse e-mail invalide";
    return false;
  }
}


//Formulaire Validation Date de Naissance

function ValidationBirth ()
{

  let birdthRegExp = new RegExp (/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/);
  if (birdthRegExp.test(birthdate.value))
  {
    birthdate.classList.remove ("error-input");
    errorBirthdate.style.display= "none";
    return true;

  } else {
    birthdate.classList.add ("error-input");
    errorBirthdate.style.display= "block" ;
    errorBirthdate.innerHTML = "Vous devez entrer votre date de naissance";
    return false;
  }

}


//Nombre de concours

function ValidationNumber()
{
  if (isNaN(parseInt(quantity.value)))

  {
    quantity.classList.add ("error-input");
    errorQuantity.innerHTML = "Veuillez entrer un nombre";
    errorQuantity.style.display = "block";
    return false;
    
  } else {

    quantity.classList.remove("error-input");
    errorQuantity.style.display = "none";
    return true;

  }

  

}



  



//Validation du formulaire

  
  function ValidationForm (e) {
    e.preventDefault () //Empêche soumission du formulaire
    let isFormValid = []//Création d'un tableau contenant les fonctions
    isFormValid.push(ValidationFirstname());
    isFormValid.push(ValidationLastname());
    isFormValid.push(ValidationNumber());
    isFormValid.push(ValidationBirth());
    isFormValid.push(ValidationConditions());
    isFormValid.push(ValidationEmail());
    

    if (!isFormValid.includes(false)) {
      errorSubmit.style.display = "none";
      modalbg.style.display = "none";
      confirmationbg.style.display = "flex";
      console.log(modalForm.reset());
      modalForm.reset();

      for (let i= 0; i < textControl.length; i++) {
        const element = textControl[i];
        element.style.border = "0.8px solid #CCC";
      }
      
    }else {
      errorSubmit.style.display = "block";
      errorSubmit.innerHTML = "Veuillez remplir tous les champs" ;
    }
    
  }


// Validations conditions d'utilisation

  function ValidationConditions() 
  {
    
    if (checkbox.checked == true) {
      errorCheckbox.style.display = "none";
      return true;

    } else {
      errorCheckbox.style.display = "block";
      errorCheckbox.innerHTML = "Veuillez accepter les termes et conditions";
      
      return false;
    }
  }

