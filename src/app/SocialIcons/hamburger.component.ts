import { Component } from '@angular/core';

@Component({
    selector: 'app-hamburger',
    imports: [],
    template: `
  <svg class="w-6 h-6" fill="none" stroke="white" stroke-width="2"
      viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
`
})
export class HamburgerComponent {

}
