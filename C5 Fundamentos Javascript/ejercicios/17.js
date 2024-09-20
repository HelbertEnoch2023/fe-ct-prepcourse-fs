function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  if(num === 0){
  return false
  }
  if (num > 0){
    return 'Es positivo'
  }
  if (num < 0){
  return 'Es negativo'
  }
  
}
// Llamada a la función con un ejemplo
console.log(esPositivo(5)); // imprime: "Es positivo"
console.log(esPositivo(-3))
console.log(esPositivo(0))

module.exports = esPositivo