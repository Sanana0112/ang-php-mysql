import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  product: any;
  productForm!: FormGroup;
  id: any;
  sub: any;
  prodSub: any;
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService, private fb: FormBuilder) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

  }

  ngOnInit(): void {
    this.prodSub = this.productService.readProducts().subscribe(res => {
      this.product = res.find(prod => prod.id === this.id);
    })
  }

  setProductFormData(data: any) {

    this.productForm = this.fb.group({
      name: [data.name],
      price: [data.price],
      description: [data.description],
      quantity: [data.quantity]
    })
  }

  submit(){
    this.productService.updateProduct(this.productForm.value).subscribe(res=>{
      console.log("product updated");
      this.router.navigateByUrl("/");
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.prodSub.unsubscribe();
  }
}
