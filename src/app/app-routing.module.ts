import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { vendorComponent } from './vendor/vendor.component';
import { ProductdashboardComponent } from './productdashboard/productdashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AdminUpdateVenderComponent } from './admin-update-vender/admin-update-vender.component';
import { AdminaddvenderComponent } from './adminaddvender/adminaddvender.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: ProductdashboardComponent,
    path: 'vendordetails',
  },
  {
    component: SellerAuthComponent,
    path: 'seller-auth',
  },
  {
    component: SellerHomeComponent,
    path: 'seller-home',
    canActivate: [AuthGuard],
  },
  {
    component: SellerAddProductComponent,
    path: 'seller-add-product',
    canActivate: [AuthGuard],
  },
  {
    component: SellerUpdateProductComponent,
    path: 'seller-update-product/:id',
    canActivate: [AuthGuard],
  },
  {
    component: SearchComponent,
    path: 'search/:query',
  },
  {
    component: ProductDetailsComponent,
    path: 'details/:productId',
  },
  {
    component: UserAuthComponent,
    path: 'user-auth',
  },
  {
    component: CartPageComponent,
    path: 'cart-page',
  },
  {
    component: CheckoutComponent,
    path: 'checkout',
  },
  {
    component: MyOrdersComponent,
    path: 'my-orders',
  },
  {
    component: vendorComponent,
    path: 'seller-home/vendor',
    canActivate: [AuthGuard],
  },
  {
    component: AboutComponent,
    path: 'about',
  },
  {
    component:ContactComponent,
    path:'contact',
  },
  {
    component: AdminComponent,
    path: 'admin',
   
  },
  {
    component: AdminhomepageComponent,
    path: 'adminhomepage',
  },
  
  {
    component: AdminaddvenderComponent,
    path: 'admin-add-vender',
  },
  {
    component: AdminUpdateVenderComponent,
    path: 'admin-update-vender/:id',
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
