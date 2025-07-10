import { PhoneObject } from "../models/phones/phones.model";

export const getDDD = function(numero) {
  return numero.substring(0, 2);
}

export const getNumberWithoutDDD =  function(numero) {
  return numero.substring(2);
}

export const getPhoneFormated = (mobilePhone: PhoneObject) => {
  return `${mobilePhone.area_code}${mobilePhone.number}`
} 