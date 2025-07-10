export interface PagarmeOrderCheckoutResponse {
  id: string;
  code: string;
  amount: number;
  currency: string;
  closed: boolean;
  items: Array<{
    id: string;
    type: string;
    description: string;
    amount: number;
    quantity: number;
    status: string;
    created_at: string;
    updated_at: string;
    code: string;
  }>;
  customer: {
    id: string;
    name: string;
    email: string;
    code: string;
    document: string;
    document_type: string;
    type: string;
    delinquent: boolean;
    address: {
      id: string;
      line_1: string;
      line_2: string;
      zip_code: string;
      city: string;
      state: string;
      country: string;
      status: string;
      created_at: string;
      updated_at: string;
    };
    created_at: string;
    updated_at: string;
    phones: {
      mobile_phone: {
        country_code: string;
        number: string;
        area_code: string;
      };
    };
  };
  status: string;
  created_at: string;
  updated_at: string;
  checkouts: Array<{
    id: string;
    currency: string;
    amount: number;
    status: string;
    default_payment_method: string;
    payment_url: string;
    customer_editable: boolean;
    required_fields: string[];
    billing_address_editable: boolean;
    skip_checkout_success_page: boolean;
    shippable: boolean;
    created_at: string;
    updated_at: string;
    expires_at: string;
    accepted_payment_methods: string[];
    accepted_brands: string[];
    accepted_multi_payment_methods: string[];
    customer: {
      id: string;
      name: string;
      email: string;
      code: string;
      document: string;
      document_type: string;
      type: string;
      delinquent: boolean;
      address: {
        id: string;
        line_1: string;
        line_2: string;
        zip_code: string;
        city: string;
        state: string;
        country: string;
        status: string;
        created_at: string;
        updated_at: string;
      };
      created_at: string;
      updated_at: string;
      phones: {
        mobile_phone: {
          country_code: string;
          number: string;
          area_code: string;
        };
      };
    };
    credit_card: {
      capture: boolean;
      authentication: {
        type: string;
        threed_secure: object;
      };
      installments: Array<{
        number: number;
        total: number;
      }>;
    };
    pix: {
      expires_at: string;
      additional_information: Array<{
        [key: string]: string;
      }>;
    };
    billing_address: {
      line_1: string;
      line_2?: string | null;
      zip_code: string;
      city: string;
      state: string;
      country: string;
    };
    metadata: Record<string, any>;
  }>;
}


export interface CreateTiSaudeOrderResponse {
  status: 'OK';                
  resource: TiSaudeOrderResource;
}

export interface TiSaudeOrderResource {
  uuid: string;  
  url: string;   
}

export enum OrderStatusEnum {
  pending = 1,
  canceled = 2,
  paid = 3
}