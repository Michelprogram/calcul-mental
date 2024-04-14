class calcul {
  constructor(NumbA, NumbB) {
    this.NumbA = NumbA;
    this.NumbB = NumbB;
  }

  Addition() {
    return this.NumbA + this.NumbB;
  }

  Soustraction() {
    return this.NumbA - this.NumbB;
  }

  Multiplication() {
    return this.NumbA * this.NumbB;
  }
}

const checkbox = document.getElementsByTagName("input");
var choix = 0;

const main = document.getElementById("main");
const main_enfant = document.getElementById("main").children;

for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("click", () => {
    choix = i;
    CreationPage(setup);
  });
} //Ecoute les checkbox

function CreationPage(callback) {
  for (let i = 0; i < 4; i++) {
    main_enfant[0].remove();
  } //enlève tout le contenu
  const div_top = document.createElement("DIV");
  div_top.setAttribute("id", "Div_top");

  const spanNb1 = document.createElement("SPAN");
  spanNb1.setAttribute("id", "Nombre1");
  spanNb1.innerText = Math.floor(Math.random() * 100); //floor arrondie

  const icone = document.createElement("I");

  switch (choix) {
    case 0:
      icone.setAttribute("class", "fas fa-plus");
      break;
    case 1:
      icone.setAttribute("class", "fas fa-minus");
      break;
    case 2:
      icone.setAttribute("class", "fas fa-times");
      break;
  }

  const spanNb2 = document.createElement("SPAN");
  spanNb2.setAttribute("id", "Nombre2");
  spanNb2.innerText = Math.floor(Math.random() * 100);

  div_top.append(spanNb1);
  div_top.append(icone);
  div_top.append(spanNb2);

  main.append(div_top);
  const input = document.createElement("INPUT");
  input.setAttribute("type", "text");
  input.setAttribute("id", "Reponse_utilisateur");

  main.append(input);

  const reponse = document.createElement("SPAN");
  reponse.setAttribute("id", "reponse");

  main.append(reponse);
  callback();
}

function setup() {
  const input = document.getElementById("Reponse_utilisateur");
  const nb1 = document.getElementById("Nombre1");
  const nb2 = document.getElementById("Nombre2");
  const rep = document.getElementById("reponse");

  input.addEventListener("change", () => {
    let cal = new calcul(parseInt(nb1.innerText), parseInt(nb2.innerText));
    switch (choix) {
      case 0:
        if (parseInt(input.value) != cal.Addition()) {
          Reponse(rep, false, input);
        } else {
          Reponse(rep, true, input, nb1, nb2);
        }
        break;
      case 1:
        if (parseInt(input.value) != cal.Soustraction()) {
          Reponse(rep, false, input);
        } else {
          Reponse(rep, true, input, nb1, nb2);
        }
        break;
      case 2:
        if (parseInt(input.value) != cal.Multiplication()) {
          Reponse(rep, false, input);
        } else {
          Reponse(rep, true, input, nb1, nb2);
        }
        break;
    }
  });
}

function Reponse(reponse, bonne_mauvaise, input, nombre1 = 0, nombre2 = 0) {
  if (bonne_mauvaise) {
    reponse.innerHTML = "Bien joué";
    nombre1.innerText = Math.floor(Math.random() * 100);
    nombre2.innerText = Math.floor(Math.random() * 100);
  } else {
    reponse.innerHTML = "Perdu";
  }
  input.value = "";
}
