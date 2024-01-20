import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface IUser {
  firstName: string,
  lastName: string,
  address: string,
  dob: string,
  email: string,
  mobileNumber: string,
  password: string
}

interface ILogin{
  email: string,
  password: string
}
interface IReset{
  password: string,
  confirmPassword: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  token : string = localStorage.getItem('token') || '';

  AddUser(data: IUser){
    console.log(data);
    return this.http.post('https://localhost:44364/api/User/AddUser',data);
  }

  loginUser(data : ILogin){
    return this.http.post('https://localhost:44364/api/User/LoginUser',data);
  }

  forgotPassword(data: string){
    return this.http.get('https://localhost:44364/api/User/ForgotPassword?email='+data);
  }

  resetPassword(data: IReset){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.http.post('https://localhost:44364/api/User/ResetPassword', data, header);
  }
}
