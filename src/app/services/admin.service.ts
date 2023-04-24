import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { adminSignUp , adminLogin } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminSignUpData = new EventEmitter<adminSignUp[] | []>();
  invalidUserAuth= new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router:Router) { }
  userSignUp(user:adminSignUp){
   this.http.post('http://localhost:3000/admin',user,{observe:'response'})
   .subscribe((result)=>{
    if(result){
      localStorage.setItem('user',JSON.stringify(result.body));
      this.router.navigate(['/adminhomepage']);
    }

   })

  }
  userLogin(data:adminLogin){
    this.http.get<adminSignUp[]>(`http://localhost:3000/admin?email=${data.email}&password=${data.password}`,
    {observe:'response'}
    ).subscribe((result)=>{
      if(result && result.body?.length){
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        this.router.navigate(['/adminhomepage']);
        this.invalidUserAuth.emit(false)
      }else{
        this.invalidUserAuth.emit(true)
      }
    })
  }

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/adminhomepage']);
    }
  }
  deleteAdmin(id: number) {
    return this.http.delete(`http://localhost:3000/admin/${id}`);
  }
  adminList() {
    return this.http.get<adminSignUp[]>('http://localhost:3000/admin');
  }
  getAdminById(id: string) {
    return this.http.get<adminSignUp>(`http://localhost:3000/admin/${id}`);
  }
  updateAdmin(product:adminSignUp) {
    return this.http.put<adminSignUp>(
      `http://localhost:3000/admin/${product.id}`,
      product
    );
  }
}
