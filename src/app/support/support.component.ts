import { Component } from '@angular/core';
import { SupportheaderComponent } from './supportheader/supportheader.component';
import { SupportcontentComponent } from './supportcontent/supportcontent.component';
import { SupporttopicsComponent } from './supporttopics/supporttopics.component';
import { SupportcontactComponent } from './supportcontact/supportcontact.component';

@Component({
  selector: 'app-support',
  imports: [SupportheaderComponent,SupportcontentComponent,SupporttopicsComponent,SupportcontactComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

}
