var h1 = document.getElementById('header');
h1 = document.body.appendChild(document.createElement('h2'));
var h2 = document.getElementsByTagName('h2')[0];
h2.appendChild(document.createTextNode('I am from an External js file'));
document.body.appendChild(document.createTextNode('Hello World!'));
