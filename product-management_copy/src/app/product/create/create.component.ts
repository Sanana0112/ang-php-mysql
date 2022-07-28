import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
productForm!:FormGroup;
  constructor(private router:Router,private productService:ProductService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.productForm=this.fb.group({
      name:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
      quantity:['',Validators.required]
    })
  }

  submit(){
    if(this.productForm.invalid){
      return;
    }
    this.productService.createProduct(this.productForm.value).subscribe(res=>{
      console.log('Product created');
      this.router.navigateByUrl("/");
    })
  }

}
