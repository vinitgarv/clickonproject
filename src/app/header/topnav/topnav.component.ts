import { Component } from '@angular/core';
import { TwitterComponent } from '../../SocialIcons/twitter.component';
import { InstagramComponent } from '../../SocialIcons/instagram.component';
import { YoutubeComponent } from '../../SocialIcons/youtube.component';
import { PinterestComponent } from '../../SocialIcons/pinterest.component';
import { FacebookComponent } from '../../SocialIcons/facebook.component copy';
import { RedditComponent } from '../../SocialIcons/reddit.component';
import { LineComponent } from '../../SocialIcons/line.component';

@Component({
  selector: 'app-topnav',
  imports: [TwitterComponent, InstagramComponent, YoutubeComponent, PinterestComponent, FacebookComponent, RedditComponent, LineComponent],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.css'
})
export class TopnavComponent {

}
