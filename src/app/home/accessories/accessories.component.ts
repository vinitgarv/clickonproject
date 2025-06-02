import { Component } from '@angular/core';
import { LatestRightComponent } from '../../latestnewsicon/latestright.component';
import { StarFillComponent } from '../../FooterIcon/starfill.component';
import { StarBlankComponent } from '../../FooterIcon/starblank.component';
import { RightIconComponent } from '../../AuthIcons/rightarrowicon.component';

@Component({
  selector: 'app-accessories',
  imports: [LatestRightComponent, StarFillComponent, StarBlankComponent, RightIconComponent],
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.css'
})
export class AccessoriesComponent {

  products = [
    {
      "title": "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      "price": "$360",
      "image": "Head.svg",
      "reviews": 738
    },

    {
      "title": "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
      "price": "$80",
      "image": "Head2.svg",
      "reviews": 538
    },

    {
      "title": "TOZO T6 True Wireless Earbuds Bluetooth Headphon....",
      "price": "$70",
      "image": "Keyboard.svg",
      "reviews": 423
    },

    {
      "title": "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
      "price": "$250",
      "image": "Printer.svg",
      "reviews": 816
    },
    {
      "title": "Samsung Electronics Samsung Galexy S21 5G",
      "price": "$2300",
      "image": "Camera.svg",
      "reviews": 647
    },

    {
      "title": "4K UHD LED Smart TV with Chromecast Built-in",
      "price": "$220",
      "image": "WebCam.svg",
      "reviews": 877
    },

    {
      "title": "Wired Over-Ear Gaming Headphones with USB ",
      "price": "$1500",
      "image": "PrinterWhite.svg",
      "reviews": 426
    },

    {
      "title": "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
      "price": "$1200",
      "image": "Washing.svg",
      "reviews": 583
    }
  ]

}