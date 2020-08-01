import { HasFormatter } from "../interfaces/hasFormatter.js";
//classes
export class Payment implements HasFormatter {
  constructor(
    public recipient: string,
    public details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details} `;
  }
}
