/* ------------------------------------------------------------------------- */

/* Grupo: 24, 
    Número: 58670, Nome: Gildo Conceição, PL: 21 
    Número: 56699, Nome: Guilherme Lima, PL: 24
    Número: 58618, Nome: Henrique Venâncio, PL:21

/* ------------------------------------------------------------------------- */

function save(){
    let name = document.getElementById('name');
    let pwd = document.getElementById('pwd');
    let userlist = JSON.parse(localStorage.getItem('utilizadores'))||[];
    let utilizador = {
        utilizador:name.value,
        password:pwd.value,
    }
    userlist.push(utilizador)
    localStorage.setItem('utilizadores', JSON.stringify(userlist));
    alert('Account has been created')
}   

function login(){
    let campos = document.forms.formlogin.elements;
    let userlist = JSON.parse(localStorage.getItem('utilizadores'))||[]
    let nome = campos.userName.value
    if(userlist.find(user => user['user']== campos.userName.value)==undefined){
        alert("User not found");
    }
    else if(userlist.find(user => user['user']== campos.userName.value).pass != campos.userPw.value){
        alert("User and password don't match");
    }
    else{
        localStorage.setItem("signedIn", JSON.stringify(nome));
        alert("Bem-vindo " + userName.value)
        window.location.href = "Home.html";    
}
}