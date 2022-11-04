import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
// Service
import { StoreService } from '../../services/store.service';
import { ProductsService } from 'src/app/modules/views/services/products.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnChanges {

  nameField = new FormControl('Soy un control');

  myShoppingCart = this.storeService.getShoppingCart();

  total = 0;

  showTitle = document.querySelector('.cart_sold-out');

  today = new Date();
  date = new Date();

  constructor(
    //Store service
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.total = this.storeService.getTotal();
  }



  //Clean Cart
  clearCart() {
    // METODO LENGHT PARA VACIAR EL ARRAY.
    this.myShoppingCart.length = 0;
    this.total = this.storeService.getTotal();
    // METODO FOR PARA VACIAR EL ARRAY.
    //   for(var i = myShoppingCart.length - 1; i >= 0; i--) {
    //   if (myShoppingCart[i]) {
    //     myShoppingCart.splice(i, 1);
    //   }
    // }
  }
  //Clear One Product
  clearOneProduct() {
    this.myShoppingCart.shift()
    this.total = this.storeService.getTotal();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}



