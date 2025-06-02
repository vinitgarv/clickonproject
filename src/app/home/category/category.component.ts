import { Component, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CatLeftComponent } from '../../categoryicon/catleft.component';
import { CatRightComponent } from '../../categoryicon/catright.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-category',
  imports: [CatLeftComponent, CatRightComponent, CommonModule, SlickCarouselModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  categories = [
    { img: 'pc2.svg', title: 'Computer & Laptop' },
    { img: 'mobile4.svg', title: 'Mobile Phones' },
    { img: 'head3.svg', title: 'Headphones' },
    { img: 'key2.svg', title: 'Keyboards' },
    { img: 'cam3.svg', title: 'Cameras' },
    { img: 'tv3.svg', title: 'Televisions' },
    { img: 'tv3.svg', title: 'Televisions' },
    { img: 'tv3.svg', title: 'Televisions' },


  ];


  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,

    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };




}