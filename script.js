const AVATAR = document.getElementById('avatar');
const NOM = document.getElementById('nom');
const PRENOM = document.getElementById('prenom');
const IDENTIFIANT = document.getElementById('identifiant');
const MAIL = document.getElementById('mail');

const API_URL= "https://regres.in:api:users?page=1";

const getData = (API_URL) => {
    fetch(API_URL).then(resp => {
        console.log(resp);
        return resp.json()
    }).then(data => {
        console.log(data);
    
        AVATAR.src =data.avatar ;
        NOM.innerText=data.last_name;
        PRENOM.innerText=data.first_name;
        IDENTIFIANT.innerText=data.id;
        MAIL.innerText=data.email;
    })
}
