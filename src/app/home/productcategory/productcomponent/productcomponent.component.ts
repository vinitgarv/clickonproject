import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productcomponent',
  imports: [],
  templateUrl: './productcomponent.component.html',
  styleUrl: './productcomponent.component.css'
})
export class ProductcomponentComponent {

  @Input() item: any;

}
