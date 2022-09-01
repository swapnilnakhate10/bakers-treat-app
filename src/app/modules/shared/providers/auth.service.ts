import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private toasterService: ToasterService) { }

  isLoggedIn(): boolean {
    let authToken = StorageService.get(StorageService.AUTH_TOKEN);
    console.log("verifying user login");
    if(authToken && authToken !== '') {
      return true;      
    }
    this.toasterService.showError("You don't have permission to view this page");
    return false;
  }

}
