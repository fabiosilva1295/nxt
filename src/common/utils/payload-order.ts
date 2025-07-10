import { CreateTiSaudeOrderRequest } from "src/ti-saude/models/order-request"
import { converterParaCentavos } from "./payment.util"
import { getDDD, getNumberWithoutDDD } from "./phones.util"

export const pupulatePayloadData = (data:CreateTiSaudeOrderRequest) => {
    const payload = {
          code: data.number,
          amount: converterParaCentavos(data.amount), 
          customer: {
            name: data.customer.name,
            type: 'individual',
            email: data.customer.email,
            document: data.customer.document,
            document_type: 'CPF',
            address: {
              country: 'BR',
              state: data.customer.uf,
              city: data.customer.city,
              zip_code: data.customer.postalcode,
              line_1: `${data.customer.number}, ${data.customer.address}, ${data.customer.district}`,
              line_2: data.customer.complement
            },
            phones: {
              mobile_phone: {
                country_code: '55',
                area_code: getDDD(data.customer.phone),
                number: getNumberWithoutDDD(data.customer.phone)
              }
            },
          },
          items: [
            {
              code: data.number,
              amount: converterParaCentavos(data.amount),
              description: 'Atendimento telessaúde NXT',
              quantity: 1
            },
          ],
          payments: [
            {
              payment_method: 'checkout',
              checkout: {
                expires_in: 3600,
                default_payment_method: 'credit_card',
                accepted_payment_methods: ['credit_card', 'pix',],
                skip_checkout_success_page: true,
                customer_editable: false,
                billing_address_editable: false,
                pix: {
                  expires_at: data.due_date_at,
                },
                billing_address: {
                  country: 'BR',
                  state: data.customer.uf,
                  city: data.customer.city,
                  zip_code: data.customer.postalcode,
                  line_1: `${data.customer.number}, ${data.customer.address}, ${data.customer.district}`,
                  line_2: ''
                },
              },
              
            }
          ],
        }
    return payload;
}