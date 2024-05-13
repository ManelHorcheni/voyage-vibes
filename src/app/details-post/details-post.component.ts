import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../site-framework/header/header.component';
import { FooterComponent } from '../site-framework/footer/footer.component';
import { RouterLink } from '@angular/router';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-details-post',
  standalone: true,
  imports: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './details-post.component.html',
  styleUrl: './details-post.component.css'
})
export class DetailsPostComponent {

}
