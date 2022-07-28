import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-by-id',
  templateUrl: './by-id.component.html',
  styleUrls: ['./by-id.component.css']
})
export class ByIdComponent implements OnInit,OnDestroy {
product:any;
id:any;
  sub: any;
  prodSub:any;
  constructor(private router:Router,private route: ActivatedRoute,private productService:ProductService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      });

   }
 
  ngOnInit(): void {
    this.prodSub=this.productService.readProducts().subscribe(res=>{
      this.product=res.find(prod=>prod.id===this.id);
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.prodSub.unsubscribe();
  }

}
