import { Component } from '@angular/core';
import { DetailsPostComponent } from '../details-post/details-post.component';
import { OutletContext } from '@angular/router';
import { HeaderComponent } from '../site-framework/header/header.component';
import { FooterComponent } from '../site-framework/footer/footer.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    DetailsPostComponent,
    HeaderComponent,
    FooterComponent

  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

}
