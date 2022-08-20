export interface IUserOrderHistory {
    success: boolean;
    message: string;
    data: IOrderHistory[];
}
export interface IOrderHistory {
    orderId: number;
    totalPrice: number;
    createdAt: string;
    orderItems: IProductHistory[];
}

export interface IProductHistory {
    itemID: number;
    quantity: number;
    productID: number;
    productName: string;
    productImage: string;
    createdAt: string;
}