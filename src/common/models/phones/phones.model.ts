export class PhoneObject {
  country_code: string;
  area_code: string;
  number: string;
}

export class PhonesObject {
  home_phone: PhoneObject;
  mobile_phone: PhoneObject;
}