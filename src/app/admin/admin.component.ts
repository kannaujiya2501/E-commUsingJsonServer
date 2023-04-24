import { Component } from '@angular/core';
import { adminSignUp, adminLogin } from '../data-type';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  showLogin:boolean=true
  authError:string="";
  constructor(private user: AdminService, private product:ProductService) {}

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp(data: adminSignUp) {
    this.user.userSignUp(data);
  }
  login(data: adminLogin) {
    this.user.userLogin(data)
    this.user.invalidUserAuth.subscribe((result)=>{
      console.warn(result);
      if(result){
         this.authError="User not found"
      }else{
        // this.localCartToRemoteCart();
      }

    })
  }
  openSignUp(){
    this.showLogin=false
  }
  openLogin(){
this.showLogin=true;
  }

  // localCartToRemoteCart(){
  //  let data = localStorage.getItem('localCart');
  //  let user = localStorage.getItem('user');
  //  let userId= user && JSON.parse(user).id;
  //  if(data){
  //   let cartDataList:product[]= JSON.parse(data);

  //   cartDataList.forEach((product:product, index)=>{
  //     let cartData:cart={
  //       ...product,
  //       productId:product.id,
  //       userId
  //     }
  //     delete cartData.id;
  //     setTimeout(() => {
  //       this.product.addToCart(cartData).subscribe((result)=>{
  //         if(result){
  //           console.warn("data is stored in DB");
  //         }
  //       })
  //     }, 500);
  //     if(cartDataList.length===index+1){
  //       localStorage.removeItem('localCart')
  //     }
  //   })
  //  }

  //  setTimeout(() => {
  //   this.product.getCartList(userId)
  //  }, 2000);

  // }

}
