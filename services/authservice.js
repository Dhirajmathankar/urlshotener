
const {LocalStorage}  = require('node-localstorage' )
const localStorage = new LocalStorage('./scratch'); 


function setAuth(value){
  localStorage.setItem('uuid', value) 
    if( localStorage.getItem('uuid') ){
      return localStorage.getItem('uuid') ;
    }else{
      return null ;
    }
}

function getAuth(){
  if (localStorage.getItem('uuid')) return localStorage.getItem('uuid') ;
  else return null ;
}

module.exports = {setAuth, getAuth}