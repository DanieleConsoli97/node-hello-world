// process.argv[0] → Il percorso dell'eseguibile di Node.js.
// console.log("Argomento 0:",process.argv[0]);
// Argomento 0: C:\Program Files\nodejs\node.exe

// process.argv[1] → Il percorso dello script che stiamo eseguendo.
// console.log("Argomento 1:",process.argv[1]);
// Argomento 1: C:\Users\Daniele\Desktop\Boolean\node-hello-world\index.js
// process.argv[2] → Il primo argomento passato dall'utente.

const message = process.argv[2] || "Hello World";
console.log(message)




