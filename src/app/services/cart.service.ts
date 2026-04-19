import { Product } from './../models/products.model';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([
     {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack",
      price: 109.95,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQk-SarY9sfrBtcieOW6YJ4Fk394h-t5EtCaTaqTMvHAxAMgSTuvrdLukOj1puKCWbZgoOHy76vgRPH7lTCbygtyG-YoSk1EQEO0vMoODKw8x2Zx1ZCoIfLgadJxLePUJBCR8LRGg&usqp=CAc",
      stock: 10,
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirt",
      price: 22.99,
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMnbiZvBM6MyJC_4g_zymZ-0Tu7D2rmtjNiAXQ93DavJoWOovksKJiYzzi6QrOUFQvXKiqRUB7tkdneTlSvVtSEQNrS7STxvGn0SHM2k3kyyJzY-zDkkgMFOAAe7TvUS21rFFm5kE&usqp=CAc",
      stock: 0,
    }
  ]);

  addToCart(product: Product){
    this.cart.set([...this.cart(), product])
  }

  removeFromCart(id: number){
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() { }
}
