export interface CreateTiSaudeOrderRequest {
  number: string;            
  amount: number;           
  due_date_at: string;      
  webhook: string;           
  customer: TiSaudeCustomer;
}

export interface TiSaudeCustomer {
  document: string;         
  name: string;              
  phone: string;             
  email: string;             
  postalcode: string;        
  address: string;           
  number: string;           
  complement: string | null; 
  district: string;          
  city: string;              
  uf: string;                
}

export interface CreateTiSaudeOrderRequest {
  number: string;            
  amount: number;            
  due_date_at: string;       
  webhook: string;          
  customer: TiSaudeCustomer; 
}


export interface TiSaudeOrderStatusCustomer {
  uuid: string;
  document: string;
  name: string;
  phone: string;
  email: string;
  postalcode: string;
  address: string;
  number: string;
  complement?: string | null;
  district: string;
  city: string;
  uf: string;
  pagarme_id: number | null;
}


export interface TiSaudeOrderStatusResource {
  uuid: string;
  status_id: number;
  number: string;
  customer_id: string;
  amount: number;
  due_date_at: string;
  url: string;
  customer: TiSaudeOrderStatusCustomer;
}

export interface TiSaudeOrderStatusResponse {
  status: 'OK';
  resource: TiSaudeOrderStatusResource;
  message: string | null;
}