import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from './../../providers/http.service';
import { ToasterService } from './../../providers/toaster.service';
import { StorageService } from './../../providers/storage.service';
import { URLDetails } from './../../../../constants/url-details';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: any;
  submitted = false;
  model = new Login();
  currentYear: any;

  constructor(private fb: FormBuilder, private httpService: HttpService, 
    private toasterService: ToasterService, private router: Router) { }

  ngOnInit(): void {
    let currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.checkIfUserIsLoggedIn();
  }

  checkIfUserIsLoggedIn() {
    let token = StorageService.get(StorageService.AUTH_TOKEN);
    if(token) {
      let isAdmin = StorageService.get(StorageService.IS_ADMIN);
      if(JSON.parse(isAdmin)) {
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['staff']);
      }
    }
  }

  onSubmit() {
    let url = URLDetails.USER_LOGIN;
    let credentials = this.loginForm.value;
    this.httpService.post(url, credentials).subscribe( (result: any) => {
      if(result.token) {
        this.onLoginSuccess(result);
      } else {
        this.onLoginError(result);
      }
    }, error => {
      this.onLoginError(error);
    })
  }

  onLoginSuccess(result : any) {
    StorageService.set(StorageService.AUTH_TOKEN, result.token);
    StorageService.set(StorageService.USER_ID, result.user._id);
    StorageService.set(StorageService.EMAIL, result.user.email);
    StorageService.set(StorageService.FIRST_NAME, result.user.firstName);
    StorageService.set(StorageService.LAST_NAME, result.user.lastName);
    StorageService.set(StorageService.IS_ADMIN, result.user.isAdmin);
    if(result.user.isAdmin) {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['staff']);
    }
  }

  onLoginError(error : any) {
    let errorMessage = error.error.message ? error.error.message : "Internal Server Error";
    this.toasterService.showError(errorMessage);
  }

}

export class Login {
  public email: string = "";
  public password: string = "";

  constructor() {  }  
}
