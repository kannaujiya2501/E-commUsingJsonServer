import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { svendorService } from '../service/svendor.service';
import { vendormodel } from '../data-type';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class vendorComponent {
  vendorModelObj:vendormodel=new vendormodel;
  formValue!: FormGroup;
  allVendorData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private formBuilder: FormBuilder, private api: svendorService) { }
  vendorModel:vendormodel[]=[];

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      vendorName: ['',Validators.required],
      Email: ['',Validators.required],
      Address: ['',Validators.required],
      phone: ['',Validators.required],
     
    })
    this.getAllData();
  }


  
  clickAddvendor() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  addvendor() {
    this.vendorModelObj.vendorName = this.formValue.value.vendorName;
    this.vendorModelObj.Email = this.formValue.value.Email;
    this.vendorModelObj.Address = this.formValue.value.Address;
    this.vendorModelObj.phone = this.formValue.value.phone;
   
    this.api.postvendor(this.vendorModelObj).subscribe(res => {
      console.log(res);
      console.log("DataSaved Succesfully")
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllData();

    },
      err => {
        alert("something went wrong")
      })

  }
  getAllData() {
    this.api.getvendor().subscribe(res => {
      this.allVendorData = res;

     
     
    })

  }
  deletevendor(data: any) {
    this.api.deletevendor(data.vendorId).subscribe(res => {
      alert("vendor Record Deleted");
      this.getAllData();
    })
  }
  onEditvendor(data: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.vendorModelObj.vendorId = data.id;
    this.formValue.controls['vendorName'].setValue(data.vendorName);
    this.formValue.controls['Email'].setValue(data.Email);
    this.formValue.controls['Address'].setValue(data.Address);
    this.formValue.controls['phone'].setValue(data.phone);
    

  }
  updatevendor() {
    this.vendorModelObj.vendorName = this.formValue.value.vendorName;
    this.vendorModelObj.Email = this.formValue.value.Email;
    this.vendorModelObj.Address = this.formValue.value.Address;
    this.vendorModelObj.phone = this.formValue.value.phone;
    
    this.api.updatevendor(this.vendorModelObj, this.vendorModelObj.vendorId).subscribe(res => {
      alert("vendor Record Updated!");
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllData();

    })
  }
}

