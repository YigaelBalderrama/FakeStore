import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../shared/product.interface';
import { config, take } from 'rxjs';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css'],
})
export class ListOfProductsComponent implements OnInit {
  productos: Product[] = [];
  durationInSeconds = 1;

  constructor(
    private RestService: RestService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }
  public getProducts() {
    this.RestService.searchProducts('products')
      .pipe(take(1))
      .subscribe((products: any) => {
        console.log(products);
        this.productos = [...this.productos, ...products];
      });
  }
  openSnackBar(message: string) {
    this._snackBar.open(`${message} confirmmed`, 'OK',{ panelClass: ["color123"],  verticalPosition: "top",});
  }
}
