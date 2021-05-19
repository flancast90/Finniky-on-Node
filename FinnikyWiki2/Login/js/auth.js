window.addEventListener('load',function(){
$.get("https://wiki.finnsoftware.net/FinnikyWiki2/Login/js/savedlogins.js", function(response){document.getElementById('gitScript').innerHTML = (response);});
});

var decrypted;
function encrypt(){

try {

decrypted = CryptoJS.AES.decrypt(this[document.getElementById('uname').value], document.getElementById('uname').value+document.getElementById('pass').value);
document.getElementById("demo1").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);

if (document.getElementById('demo1').innerHTML.length > 1){
document.getElementById('greeting-background').style.display='block';
document.getElementById('greeting').innerHTML='Welcome Back '+document.getElementById('uname').value+'!';
}

}catch (e){
error();
}

}
function changetogen(){
document.getElementById('uname').placeholder='Please enter a unique username';
document.getElementById('pass').placeholder='Please enter a secure password';
document.getElementById('create-acc').style.display='none';
document.getElementById('submitit').style.display='none';
document.getElementById('create-btn').style.display='block';
document.getElementById('log-btn').style.display='block';
}
function changetolog(){
document.getElementById('uname').placeholder='Username';
document.getElementById('pass').placeholder='Password';
document.getElementById('create-acc').style.display='block';
document.getElementById('submitit').style.display='block';
document.getElementById('create-btn').style.display='none';
document.getElementById('log-btn').style.display='none';
}
function generate(){
//special chars not allowed in uname. ReGex by Stack Overflow credit--Chaitanya--
var iChars = document.getElementById('uname').value;
if(!(iChars.match(/\W/g)) == "") {
    errorChars();
    return false;
}

//catch if uname is taken already
if ((typeof this[document.getElementById('uname').value] == 'undefined')&&(document.getElementById('pass').value != '')) {
var resulted = {"Uname":document.getElementById('uname').value, "Pass":document.getElementById('pass').value};
var enc = document.getElementById('dataHidden').value = CryptoJS.AES.encrypt(JSON.stringify(resulted), document.getElementById('uname').value+document.getElementById('pass').value);
document.getElementById('gitScript').innerHTML+="\nvar "+document.getElementById('uname').value+"= "+'\''+enc+'\''+";";
push();
    
document.getElementById('loading-scr').style.display='block';
setTimeout(function(){
document.getElementById('loading-scr').style.display='none';
location.reload(true);
}, 510000);
    
}else{
document.getElementById('err-msg').style.display='block';
document.getElementById('err-msg').innerHTML='Please verify that your Username is not already taken, and all boxes are filled';

}
//disallow special chars inside uname
}
function error(){
document.getElementById('err-msg').style.display='block';
document.getElementById('err-msg').innerHTML='Your Username and Password may not match.';
}
function errorChars(){
document.getElementById('err-msg').style.display='block';
document.getElementById('err-msg').innerHTML='Please verify that your Username does not contain special characters such as !@#$%^&*(){}[];:"<>/?';
}
