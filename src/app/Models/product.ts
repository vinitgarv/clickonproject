export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    quantity: number;
    image: string;
    discount?: number;
    tax?: number;
}
