import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

interface IReset {
  password: string,
  confirmPassword: string
}

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private user : UserService) { }

  ngOnInit(): void {
  }

  resetPassword = new FormGroup({
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required)
  })

  onSubmit() {
    console.log(this.resetPassword.value);
    let data: IReset = this.resetPassword.value;
    this.user.resetPassword(data).subscribe((result: any) => {
      console.log(result);
    })
  }
}
