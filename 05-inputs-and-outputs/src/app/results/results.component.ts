import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-results',
    template: `
    <h2>Finding results for</h2>
    <p>{{id}}</p>
    <hr/>
    <h2>Results</h2>
    <p>Search results show here</p>
  `,
    styles: [],
    standalone: true
})
export class ResultsComponent implements OnInit {
  private productsService: ProductsService = inject(ProductsService);
  @Input() id: string = '';

  ngOnInit(): void {  
    // possible injection attack
    this.productsService.getProducts(this.id);
  }
}
