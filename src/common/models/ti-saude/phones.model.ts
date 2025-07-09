export const getDDD = function(numero) {
  return numero.substring(0, 2);
}

export const getNumberWithoutDDD =  function(numero) {
  return numero.substring(2);
}