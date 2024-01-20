import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

interface IUser{
  firstName: string,
  lastName: string,
  address: string,
  dob: string,
  email: string,
  mobileNumber: string,
  password: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb : FormBuilder, private user: UserService) { }

  visible : boolean = false;
  ngOnInit(): void {
    this.Registeruser = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  Registeruser!: FormGroup;
  RegisterData! : IUser;

  makeVisible(){
    this.visible = true;
  }

  makeHide(){
    this.visible = false;
  }

  onSubmit(){
    if(this.Registeruser.invalid){
      return
    }
    else{
      this.RegisterData = this.Registeruser.value;
      let date: string[] = new Date(this.RegisterData.dob).toLocaleString().split(",");
      this.RegisterData.dob = date[0];
      this.user.AddUser(this.RegisterData).subscribe((result: any) => {
        console.log(result);
      })
    }
  }
}
