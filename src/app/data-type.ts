export interface signUp {
  id:number
  name: string;
  email: string;
  password: string;
}
export interface login {
  id:number;
  email: String;
  password: String;
}

export interface adminSignUp {
  id:number
  name: string;
  email: string;
  password: string;
}
export interface adminLogin {
  id:number
  email: String;
  password: String;
}

export interface product{
  name:string,
  price:number,
  category:string,
  color:string,
  image:string,
  description:string,
  id:number,
  quantity:undefined | number,
  productId:undefined|number
}
export interface cart{
  name:string,
  price:number,
  category:string,
  color:string,
  image:string,
  description:string,
  id:number| undefined,
  quantity:undefined | number,
  productId:number,
  userId:number
}

export interface priceSummary{
  price:number,
  discount:number,
  tax:number,
  delivery:number,
  total:number
}

export interface order {
  email:string,
  address:string,
  contact:string,
  totalPrice:number,
  userId:string,
  id:number|undefined
}
export class vendormodel {

  vendorId:number=0;
  vendorName:string='';
  Email:string='';
  Address:string='';
  phone!:number;
}
export class Productmodel {

  productId:number=0;
  productName:string='';
  productDescription:string='';
  imageUrl:string='';
  unitPrice!:number;
}
