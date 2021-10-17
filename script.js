const AVATAR = document.getElementById("avatar");
const NOM = document.getElementById("nom");
const PRENOM = document.getElementById("prenom");
const IDENTIFIANT = document.getElementById("identifiant");
const MAIL = document.getElementById("mail");

const PERSONNE = document.getElementById("personne_suivante");
const API_URL = "https://reqres.in/api/users?";

class Identite {
  constructor(avatar, nom, prenom, identifiant, mail) {
    this.avatar = avatar;
    this.nom = nom;
    this.prenom = prenom;
    this.identifiant = identifiant;
    this.mail = mail;
  }

  PersonneSuiv() {
    PERSONNE.innerHTML += `
        <div>
            <img
              id="avatar"
              src="${this.avatar}"
              alt=""
            />
          </div>
          <div id="personne1">
            <p id="nom" >${this.nom}</p>  
            <p id="prenom">${this.prenom} </p>
            <p id="identifiant"> ${this.identifiant}</p>
            <p id="mail">${this.mail}</p>
          </div>`;
  }
}

const getData = (api) => {
  fetch(api)
    .then((resp) => {
      return resp.json();
    })
    .then((dataUser) => {
      console.log(dataUser);

      const PERPAGE = dataUser.per_page;

      for (i = 0; i < PERPAGE; i++) {
        AVATAR.src = dataUser.data[i].avatar;
        NOM.innerText = dataUser.data[i].last_name;
        PRENOM.innerText = dataUser.data[i].first_name;
        IDENTIFIANT.innerText = dataUser.data[i].id;
        MAIL.innerText = dataUser.data[i].email;
        // PERSONNE.innerHTML='';

        const gens = new Identite(AVATAR, NOM, PRENOM, IDENTIFIANT, MAIL);
        gens.PersonneSuiv();
      }
    });
};

getData(API_URL);
