import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { PrimaryButtonComponent } from './../primary-button/primary-button.component';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="px-4 py-4 shadow-md bg-slate-100 flex justify-between items-center">
      <button routerLink="/" class="text-xl">My store</button>
      <app-primary-button [label]="'Cart(' + cartService.cart().length + ')'" 
      routerLink="/cart"
      />
    </div>
  `,
  styles: `
  `
})
export class HeaderComponent {

    cartService = inject(CartService)

}
