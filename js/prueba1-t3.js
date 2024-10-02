/*console.log("1. " + new Date().toString);

setTimeout(() => console.log("2. " + new Date().toString()),5000);

console.log("3. " + new Date().toString());

confirm('¿Quieres pararla?') ? clearTimeout(id) : true;

let num  = 1;

let idInterval = setInterval(function() {
    console.log(num++);
    if (num > 10) {
        clearInterval(idInterval);
    }
}, 1000);*/

console.log(location.href);
console.log(location.host);
console.log(location.port);
console.log(location.protocol);

//location.reload();
//location.assign("https://google.com");
//location.replace("https://google.com");

//history.back();
console.log(history.length);
history.forward();
history.go(2);
