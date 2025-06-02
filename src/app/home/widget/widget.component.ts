import { Component } from '@angular/core';
import { FeatureComponent } from '../feature/feature.component';
import { RightIconComponent } from '../../AuthIcons/rightarrowicon.component';

@Component({
  selector: 'app-widget',
  imports: [RightIconComponent],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent {

}
