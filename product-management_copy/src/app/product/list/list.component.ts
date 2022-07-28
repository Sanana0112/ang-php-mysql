import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.readProducts().subscribe((res) => {
      this.products = res;
    })
  }

  viewProduct(id: any) {
    this.router.navigateByUrl(`product/${id}`);
  }

  editProduct(id: any) {
    this.router.navigateByUrl(`edit/${id}`);
  }

  deleteProduct(id: any) {
    this.productService.deleteProduct(id).subscribe((res) => {
      console.debug(res);
    })
  }


}
