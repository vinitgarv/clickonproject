import { Component } from '@angular/core';
import { RightIconComponent } from '../../AuthIcons/rightarrowicon.component';
import { RightArrowComponent } from '../../icons/righarrow.component';
import { StarFillComponent } from '../../FooterIcon/starfill.component';

@Component({
  selector: 'app-products',
  imports: [RightIconComponent, RightArrowComponent, StarFillComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products = [
    {
      "title": "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
      "price": "$70",
      "image": "img21.svg",
      "reviews": 738
    },

    {
      "title": "Samsung Electronics Samsung Galexy S21 5G",
      "price": "$2300",
      "image": "img22.svg",
      "reviews": 538
    },

    {
      "title": "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      "price": "$360",
      "image": "img23.svg",
      "reviews": 423
    },

    {
      "title": "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
      "price": "$80",
      "image": "img24.svg",
      "reviews": 816
    },
    {
      "title": "Wired Over-Ear Gaming Headphones with USB",
      "price": "$1500",
      "image": "img25.svg",
      "reviews": 647
    },

    {
      "title": "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
      "price": "$1200",
      "image": "img26.svg",
      "reviews": 877
    },

    {
      "title": "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
      "price": "$250",
      "image": "img27.svg",
      "reviews": 426
    },

    {
      "title": "4K UHD LED Smart TV with Chromecast Built-in",
      "price": "$220",
      "image": "img28.svg",
      "reviews": 583
    }
  ]

}

