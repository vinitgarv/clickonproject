import { Component } from '@angular/core';
import { ProductcomponentComponent } from './productcomponent/productcomponent.component';

@Component({
  selector: 'app-productcategory',
  imports: [ProductcomponentComponent],
  templateUrl: './productcategory.component.html',
  styleUrl: './productcategory.component.css'
})
export class ProductcategoryComponent {


  product1 = [

    {
      "title": "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      "price": "$1,500",
      "image": "img1.png"
    },
    {
      "title": "Simple Mobile 4G LTE Prepaid Smartphone",
      "price": "$1,500",
      "image": "img2.png"
    },
    {
      "title": "4K UHD LED Smart TV with Chromecast Built-in",
      "price": "$1,500",
      "image": "img3.png"
    }
  ]


  product2 = [
    {
      "title": "Samsung Electronics Samsung Galexy S21 5G",
      "price": "$1,500",
      "image": "img4.png"
    },
    {
      "title": "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
      "price": "$1,500",
      "image": "img5.png"
    },
    {
      "title": "Sony DSCHX8 High Zoom Point & Shoot Camera",
      "price": "$1,500",
      "image": "img6.png"
    }
  ]


  product3 = [
    {
      "title": "Portable Wshing Machine, 11lbs capacity Model 18NMFW...",
      "price": "$1,500",
      "image": "img7.png"
    },
    {
      "title": "Sony DSCHX8 High Zoom Point & Shoot Camera",
      "price": "$1,500",
      "image": "img8.png"
    },
    {
      "title": "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
      "price": "$1,500",
      "image": "img9.png"
    }

  ]


  product4 = [

    {
      "title": "TOZO T6 True Wireless Earbuds Bluetooth Headpho...",
      "price": "$1,500",
      "image": "img10.png"
    },
    {
      "title": "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...",
      "price": "$1,500",
      "image": "img11.png"
    },
    {
      "title": "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...",
      "price": "$1,500",
      "image": "img12.png"
    }

  ]



}
