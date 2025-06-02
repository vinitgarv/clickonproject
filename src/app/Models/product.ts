export interface Product {
    id: number;
    title: string;
    price: number;
    originalPrice?: number;
    quantity?: number;
    image: string;
    discount?: number;
    tax?: number;
}
