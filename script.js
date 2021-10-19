

const PERSONNE = document.getElementById("blocs");
const API_URL = "https://reqres.in/api/users?";

const API_URL_PAGE = "https://reqres.in/api/users?page=2";
const BUTTONS = document.getElementById("page");

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
            
          <div id="personne">
            <img id="avatar" src="${this.avatar}" alt=""/>
            <div id="NP">
            <p id="nom" >${this.nom} ${this.prenom}</p>  
            
            <p id="identifiant"> ${this.identifiant}</p>
            <p id="mail">${this.mail}</p>
            </div>
          </div>`;
  }
}

BUTTONS.addEventListener('click',() => {
  console.log(BUTTONS.value);
  const NUMERO_PAGE = BUTTONS.value;
  getData(API_URL_PAGE+NUMERO_PAGE);
});

const getData = (api) => {
  fetch(api)
    .then((resp) => {
      return resp.json();
    })
    .then((dataUser) => {
      console.log(dataUser);

      PERSONNE.innerHTML = '';
      const PERPAGE = dataUser.per_page;

      for (let i = 0; i < PERPAGE; i++) {
        const urlAvatar = dataUser.data[i].avatar;
        const urlNOM=dataUser.data[i].last_name;
        const urlPRENOM=dataUser.data[i].first_name;
        const urlIDENTIFIANT=dataUser.data[i].id;
        const urlMAIL = dataUser.data[i].email;

        const gens = new Identite(urlAvatar, urlNOM, urlPRENOM, urlIDENTIFIANT, urlMAIL);
        gens.PersonneSuiv();
      }
    });
};

getData(API_URL);
