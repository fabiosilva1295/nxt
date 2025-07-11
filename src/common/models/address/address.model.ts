export class AddressObject {
  county: string;
  state: string;
  city: string;
  zip_code: string;
  line_1: string;
  line_2?: string;
}

export interface ParsedAddress {
  number: string;
  street: string;
  district: string;
}