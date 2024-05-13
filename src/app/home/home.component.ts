import { Component } from '@angular/core';
import { HeaderComponent} from '../site-framework/header/header.component';
import { FooterComponent } from '../site-framework/footer/footer.component';
import { PostComponent } from '../post/post.component';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PostComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
