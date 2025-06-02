import { Component, inject } from '@angular/core';
import { BlueRightComponent } from '../../FooterIcon/blueright.component';
import { LikeIconComponent } from '../../FooterIcon/likeicon.component';
import { BasketComponent } from '../../FooterIcon/basket.component';
import { StarFillComponent } from '../../FooterIcon/starfill.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bestdeals',
  imports: [BlueRightComponent, LikeIconComponent, BasketComponent, StarFillComponent],
  templateUrl: './bestdeals.component.html',
  styleUrl: './bestdeals.component.css'
})
export class BestdealsComponent {

  route: Router = inject(Router);

  onClick() {

    this.route.navigate(['/productdetail'])
  }


  products = [
    {
      "title": "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      "price": "$2300",
      "image": "drone.svg"
    },

    {
      "title": "Simple Mobile 4G LTE Prepaid Smartphone",
      "price": "$220",
      "image": "Mobile1.svg"
    },

    {
      "title": "4K UHD LED Smart TV with Chromecast Built-in",
      "price": "$150",
      "image": "Game.svg"
    },

    {
      "title": "Sony DSCHX8 High Zoom Point & Shoot Camera",
      "price": "$1200",
      "image": "Mobile2.svg"
    },
    {
      "title": "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
      "price": "$299",
      "image": "drone2.svg"
    },

    {
      "title": "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
      "price": "$70",
      "image": "pc.svg"
    },

    {
      "title": "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
      "price": "$160",
      "image": "camera2.svg"
    },

    {
      "title": "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",
      "price": "$250",
      "image": "camera2.svg"
    }
  ]
}

