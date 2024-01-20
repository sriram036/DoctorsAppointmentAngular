import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

interface ILogin {
  email: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder, private user : UserService) { }

  loginUser!:FormGroup;
  ngOnInit(): void {
    this.loginUser = this.fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.loginUser.invalid){
      return
    }
    else{
      console.log(this.loginUser.value);
      let data: ILogin = this.loginUser.value;
      this.user.loginUser(data).subscribe((result: any) => {
        console.log(result);
        localStorage.setItem('token',result.data);
      });
    }
  }
}
