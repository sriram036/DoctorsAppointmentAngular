import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private user : UserService) { }

  ngOnInit(): void {
  }

  forgotPasswordUser = new FormGroup({
    email: new FormControl('',Validators.required)
  });

  onSubmit() {
    if(this.forgotPasswordUser.invalid){
      return
    }
    else{
      console.log(this.forgotPasswordUser.value);
      let data: string = this.forgotPasswordUser.controls['email'].value;
      console.log(data);
      this.user.forgotPassword(data).subscribe((result: any) => {
        console.log(result);
      })
    }
  }
}
