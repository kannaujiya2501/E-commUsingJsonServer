import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { signUp } from '../data-type';

@Component({
  selector: 'app-adminaddvender',
  templateUrl: './adminaddvender.component.html',
  styleUrls: ['./adminaddvender.component.css']
})
export class AdminaddvenderComponent {
  addProductMessage: string | undefined;
  constructor(private seller: SellerService) {}

  ngOnInit(): void {}

  submit(data: signUp) {
    this.seller.addSeller(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'vender is added successfully';
      }
    });

    setTimeout(() => {
      this.addProductMessage=undefined
    }, 3000);
  }

}
