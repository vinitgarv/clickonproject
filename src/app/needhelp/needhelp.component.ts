import { Component } from '@angular/core';
import { PlusIconComponent } from '../SocialIcons/plusicon.component';
import { RightIconComponent } from '../AuthIcons/rightarrowicon.component';

@Component({
  selector: 'app-needhelp',
  imports: [PlusIconComponent, RightIconComponent],
  templateUrl: './needhelp.component.html',
  styleUrl: './needhelp.component.css'
})
export class NeedhelpComponent {

  topics = [
    { topic: 'Suspendisse ultrices pharetra libero sed interdum.', desc: 'This is the first topic' },
    { topic: 'Quisque quis nunc quis urna tempor lobortis velnonorci.', desc: 'This is the second topic' },
    { topic: 'Donec rutrum ultrices ante nec malesuada. Inaccumsaneget nisi a rhoncus.', desc: 'This is the third topic' },
    { topic: 'Nulla sed sapien maximus, faucibus massa vitae.', desc: 'This is the fourth topic' }
  ]




  isShown: boolean = false;
  activeIndex: number | null = null;

  onClick(index: number) {

    setTimeout(() => {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    }, 500);
  }
}
