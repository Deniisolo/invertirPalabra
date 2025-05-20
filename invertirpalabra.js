const palabra = process.argv[2];

if (!palabra) {
  console.log("Por favor, ingresa una palabra.");
} else {
  const invertida = palabra.split("").reverse().join("");
  console.log(`Palabra invertida: ${invertida}`);
}
