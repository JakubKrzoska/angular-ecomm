import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: ` <app-header /> 
              <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecomm';
}
