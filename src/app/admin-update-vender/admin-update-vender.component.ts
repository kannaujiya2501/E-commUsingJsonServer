import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { signUp } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-admin-update-vender',
  templateUrl: './admin-update-vender.component.html',
  styleUrls: ['./admin-update-vender.component.css'],
})
export class AdminUpdateVenderComponent {
  venderData: undefined | signUp;
  productMessage: undefined | string;
  constructor(private route: ActivatedRoute, private seller: SellerService) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId &&
      this.seller.getSellerById(productId).subscribe((data) => {
        console.warn(data);
        this.venderData = data;
      });
  }
  submit(data: any) {
    if (this.venderData) {
      data.id = this.venderData.id;
    }
    this.seller.updateSeller(data).subscribe((result) => {
      if (result) {
        this.productMessage = 'Vender has updated';
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
    console.warn(data);
  }
}
