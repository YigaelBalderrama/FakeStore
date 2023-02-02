import { Component, OnInit } from '@angular/core';
import { RestService } from "./services/rest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  
  public productos: Array<any> = [];

  constructor(private RestService: RestService){
    
  }
  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * getProducts
   */
  public getProducts() {
    this.RestService.get('https://fakestoreapi.com/products').subscribe((json) => {
      console.log(json);
    });
  }
}
