// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any[] = [
    { id: 1,title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",price: 2300, image: "drone.svg",  discount: 20,tax: 20, quantity:1, type: 'deal' },
    { id: 2, title: "Simple Mobile 4G LTE Prepaid Smartphone",price: 220,image: "Mobile1.svg",  discount: 30,tax: 40, quantity:1, type: 'deal' },
    { id: 3, title: "4K UHD LED Smart TV with Chromecast Built-in",price: 150,image: "Game.svg",  discount: 30,tax: 50, quantity:1,  type: 'deal' },
    { id: 4, title: "Sony DSCHX8 High Zoom Point & Shoot Camera",price: 1200,image: "Mobile2.svg",  discount: 20,tax: 50,quantity:1,  type: 'deal' },
    { id: 5, title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",price: 299,image: "drone2.svg", discount: 30,tax: 40,quantity:1,  type: 'deal' },
    { id: 6, title: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",price: 70,image: "pc.svg",  discount: 30,tax: 40, quantity:1,  type: 'deal' },
    { id: 7, title: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",price: 160,image: "camera2.svg",  discount: 30,tax: 40,quantity:1,  type: 'deal' },
    { id: 8,title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",price: 250,image: "camera2.svg",  discount: 30,tax: 40,quantity:1,  type: 'deal' },

    { id: 9,title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",price: 70,image: "img21.svg",reviews: 738,  discount: 30,tax: 40,quantity:1,  type: 'featured' },
    { id: 10, title: "Samsung Electronics Samsung Galexy S21 5G",price: 2300,image: "img22.svg",reviews: 538,  discount: 30,tax: 40,quantity:1,  type: 'featured' },
    { id: 11, title: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",price: 360,image: "img23.svg",reviews: 423,  discount: 30,tax: 40,quantity:1,  type: 'featured' },
    { id: 12, title: "Portable Wshing Machine, 11lbs capacity Model price...",price: 80,image: "img24.svg",reviews: 816,  discount: 30,tax: 40,quantity:1,  type: 'featured' },
    { id: 13, title: "Wired Over-Ear Gaming Headphones with USB",price: 1500,image: "img25.svg",reviews: 647,  discount: 30,tax: 40, quantity:1, type: 'featured' },
    { id: 14,  title: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",price: 1200,image: "img26.svg",reviews: 877,  discount: 30,tax: 40,quantity:1,  type: 'featured' },
    { id: 15, title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",price: 250,image: "img27.svg",reviews: 426, discount: 30,tax: 40,quantity:1,  type: 'featured' },
    { id: 16,  title: "4K UHD LED Smart TV with Chromecast Built-in",price: 220,image: "img28.svg",reviews: 583, discount: 30,tax: 40,quantity:1,  type: 'featured' },

    { id: 17,title: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...", price: 360,image: "Head.svg",reviews: 738, discount: 30,tax: 40,quantity:1,  type: 'acc' },
    { id: 18, title: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",price: 80,image: "Head2.svg",reviews: 538, discount: 30,tax: 40, quantity:1, type: 'acc' },
    { id: 19, title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon....",price: 70,image: "Keyboard.svg",reviews: 423, discount: 30,tax: 40, quantity:1, type: 'acc' },
    { id: 20, title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",price: 250,image: "Printer.svg",reviews: 816, discount: 30,tax: 40, quantity:1, type: 'acc' },
    { id: 21, title: "Samsung Electronics Samsung Galexy S21 5G",price: 2300,image: "Camera.svg",reviews: 647,  discount: 30,tax: 40,quantity:1,  type: 'acc' },
    { id: 22,  title: "4K UHD LED Smart TV with Chromecast Built-in",price: 220,image: "WebCam.svg",reviews: 877, discount: 30,tax: 40,quantity:1,  type: 'acc' },
    { id: 23, title: "Wired Over-Ear Gaming Headphones with USB ",price: 1500,image: "PrinterWhite.svg",reviews: 426,  discount: 30,tax: 40,quantity:1,  type: 'acc' },
    { id: 24,  title: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",price: 1200 ,image: "Washing.svg",reviews: 583,  discount: 30,tax: 40,quantity:1,  type: 'acc' }
  ];

  getAllProducts(): any[] {
    return this.products;
  }

  getFeaturedProducts(): any[] {
    return this.products.filter(p => p.type === 'featured');
  }

  getBestDeals(): any[] {
    return this.products.filter(p => p.type === 'deal');
  }

    getacc(): any[] {
    return this.products.filter(p => p.type === 'acc');
  }
  
  getProductById(id:number) {
    return this.products.find(p => p.id === id);
  }

searchProducts(term: string): any[] {
  if (!term.trim()) {
    return [];
  }
  term = term.toLowerCase().trim();
  const startsWith = this.products.filter(p =>
    p.title.toLowerCase().startsWith(term)
  );

  const includes = this.products.filter(p =>
    p.title.toLowerCase().includes(term)
  );
  return [...startsWith, ...includes];
}
}