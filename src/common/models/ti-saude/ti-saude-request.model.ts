import { CostumerTiSaude } from "src/common/models/ti-saude/costumer.model";

export interface TiSaudeRequestBody {
    number: string, 
    amount: number, 
    due_date_at: string, 
    webhook: string, 
    customer: CostumerTiSaude
}