export interface IPaymentMethod {
        id?:number;
        holderName: string,
        cardNumber: string,
        expYear: string,
        expMonth: string,
        cvc: string,
        provider: string,
        payementType: string,
        arabicPayementType?: string,
        stripePaymentToken?: string,
        arabicProvider?: string,
        accountNo?: number,
        expiry?: Date
}
