import { ParsedAddress } from "../models/address/address.model";

export const converterParaCentavos = function(valor: number) {
  return Math.round(valor * 100);
}

export function parseAddressLine1(line_1: string): ParsedAddress {
  const [numberPart, streetPart, districtPart] = line_1.split(',').map(part => part.trim());
  
  return {
    number: numberPart || '',
    street: streetPart || '',
    district: districtPart || '',
  };
}