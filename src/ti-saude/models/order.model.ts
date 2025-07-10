
export class OrderResponse {
    status: string;
	resource: OrderResource
}

class OrderResource {
    uuid: string;
    url: string
}



export class StatusOrderInterface {
	id: number;
	description: string
}

export interface OrderPaymentResponse {
  id: string
  name: string
  order_code: string
  url: string
  payment_link_type: string
  status: string
  expires_in: number
  max_sessions: number
  total_sessions: number
  max_paid_sessions: number
  total_paid_sessions: number
  created_at: string
  updated_at: string
  payment_settings: PaymentSettings
  customer_settings: CustomerSettings
  cart_settings: CartSettings
  layout_settings: LayoutSettings
  flow_settings: FlowSettings
  checkout_settings: CheckoutSettings
  account_settings: AccountSettings
}

export interface PaymentSettings {
  accepted_payment_methods: string[]
  accepted_multi_payment_methods: any[]
  credit_card_settings: CreditCardSettings
  pix_settings: PixSettings
  google_pay_enabled: boolean
  apple_pay_enabled: boolean
  threed_secure_enabled: boolean
  click_to_pay_enabled: boolean
}

export interface CreditCardSettings {
  operation_type: string
  installments: Installment[]
}

export interface Installment {
  number: number
  total: number
}

export interface PixSettings {
  expires_in: number
  discount: number
  discount_percentage: number
}

export interface CustomerSettings {
  customer_id: string
  editable: boolean
}

export interface CartSettings {
  shipping_cost: number
  shipping_total_cost: number
  items_total_cost: number
  total_cost: number
  items: Item[]
}

export interface Item {
  name: string
  amount: number
  shipping_cost: number
  default_quantity: number
}

export interface LayoutSettings {
  primary_color: string
  secondary_color: string
}

export interface FlowSettings {}

export interface CheckoutSettings {
  accepted_brands: string[]
  address_type: string
  enabled: boolean
  required_fields: string[]
}

export interface AccountSettings {
  merchant_id: string
  account_id: string
  account_name: string
  display_name: string
  organization: string
}

