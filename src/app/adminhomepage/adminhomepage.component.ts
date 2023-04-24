import { Component } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import {signUp } from '../data-type';
import { SellerService} from '../services/seller.service';

@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent {
  SignUpList:undefined |   signUp[];
  productMessage: undefined | string;
  icon = faTrash;
  iconEdit=faEdit;
  constructor(private seller: SellerService) {}

  ngOnInit(): void {
    this.list();
  }

  deleteAdmin(id: number) {
    this.seller.deleteSeller(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product is deleted';

        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }

  list() {
    this.seller.sellerList().subscribe((result) => {
      if (result) {
        this.SignUpList = result;
      }
    });
  }

}
