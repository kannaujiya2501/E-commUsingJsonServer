import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  adminSignUpData = new EventEmitter<signUp[] | []>();
  isSellerLoggedIn= new BehaviorSubject<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false)

  constructor(private http:HttpClient, private router:Router) { }
  userSignUp(data:signUp){
    this.http.post('http://localhost:3000/seller',
    data,
    {observe:'response'}).subscribe((result)=>{
      console.warn(result)
      if(result){
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
      }
    })
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }
  userLogin(data:login){
   this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
   {observe:'response'}).subscribe((result:any)=>{
    console.warn(result)
    if(result && result.body && result.body.length===1){
      this.isLoginError.emit(false)
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
    }else{
      console.warn("login failed");
      this.isLoginError.emit(true)
    }
   })
  }
  deleteSeller(id: number) {
    return this.http.delete(`http://localhost:3000/seller/${id}`);
  }
  sellerList() {
    return this.http.get<signUp[]>('http://localhost:3000/seller');
  }
  getSellerById(id: string) {
    return this.http.get<signUp>(`http://localhost:3000/seller/${id}`);
  }
  updateSeller(signUp:signUp) {
    return this.http.put<signUp>(
      `http://localhost:3000/seller/${signUp.id}`,
      signUp
    );
  }
  addSeller(data: signUp) {
    return this.http.post('http://localhost:3000/seller', data);
  }
}
