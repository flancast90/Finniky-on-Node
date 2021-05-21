function grabData() {

var settings = {
  "url": "https://api.github.com/repos/flancast90/flancast90.github.io/git/refs/heads/main",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": "Basic ZmxhbmNhc3Q5MDpiYTc3NjE0Y2I4YTE5MzNkN2Q1MjdiNTYxYTUwMWVjYTgxZjhmZGY1"
  },
};

$.ajax(settings).done(function (response) {
  document.getElementById('sha1').innerHTML = JSON.stringify(response.object.sha).replaceAll('"','');
});

}

async function modifyData(){
await grabData();

setTimeout(function(){
var settings = {
  "url": "https://api.github.com/repos/flancast90/flancast90.github.io/git/commits/"+document.getElementById('sha1').innerHTML,
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": "Basic ZmxhbmNhc3Q5MDpiYTc3NjE0Y2I4YTE5MzNkN2Q1MjdiNTYxYTUwMWVjYTgxZjhmZGY1"
  },
};

$.ajax(settings).done(function (response) {
  document.getElementById('sha2').innerHTML = (JSON.stringify(response.tree.sha).replaceAll('"',''));
});
},1000);
}

async function changeData(){
await modifyData();
var contentSaver= document.getElementById('gitScript').innerHTML.replaceAll('\\','\\\\').replaceAll('"','\\"').replaceAll('\n','\\n');

setTimeout(function(){

var settings = {
  "url": "https://api.github.com/repos/flancast90/flancast90.github.io/git/trees",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Authorization": "Basic ZmxhbmNhc3Q5MDpiYTc3NjE0Y2I4YTE5MzNkN2Q1MjdiNTYxYTUwMWVjYTgxZjhmZGY1",
    "Content-Type": "text/html"
  },
  "data": "{\n    \"base_tree\": \""+document.getElementById('sha2').innerHTML+"\",\n    \"tree\": [\n        {\n            \"path\": \"FinnikyWiki2/Login/js/savedlogins.js\",\n            \"mode\": \"100644\",\n            \"type\": \"blob\",\n            \"content\": \""+contentSaver+"\"\n        }\n    ]\n}",
};

$.ajax(settings).done(function (response) {
  document.getElementById('sha3').innerHTML=JSON.stringify(response.sha).replaceAll('"','');
});

},2000);
}

async function changesomeMore(){
await changeData();

setTimeout(function(){

var settings = {
  "url": "https://api.github.com/repos/flancast90/flancast90.github.io/git/commits",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Authorization": "Basic ZmxhbmNhc3Q5MDpiYTc3NjE0Y2I4YTE5MzNkN2Q1MjdiNTYxYTUwMWVjYTgxZjhmZGY1",
    "Content-Type": "text/html"
  },
  "data": "{\n    \"parents\": [\""+document.getElementById('sha1').innerHTML+"\"],\n    \"tree\": \""+document.getElementById('sha3').innerHTML+"\",\n    \"message\": \"Updated by lockifyJS\"\n}",
};

$.ajax(settings).done(function (response) {
  document.getElementById('sha4').innerHTML = (JSON.stringify(response.sha)).replaceAll('"','');
});

},3000);
}

async function push(){
await changesomeMore();

setTimeout(function(){

var settings = {
  "url": "https://api.github.com/repos/flancast90/flancast90.github.io/git/refs/heads/main",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Authorization": "Basic ZmxhbmNhc3Q5MDpiYTc3NjE0Y2I4YTE5MzNkN2Q1MjdiNTYxYTUwMWVjYTgxZjhmZGY1",
    "Content-Type": "text/html"
  },
  "data": "{\n    \"sha\":\""+document.getElementById('sha4').innerHTML+"\"\n}",
};

$.ajax(settings).done(function (response) {
  document.getElementById('output').innerHTML = JSON.stringify(response.url).replaceAll('"','');
});

},4000);

}
