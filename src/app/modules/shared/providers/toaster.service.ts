import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  options: any;

  constructor(private toastr: ToastrService) {
    this.options =  { 
        closeButton: true, 
        timeOut: 3000,
        tapToDismiss: true,
        positionClass:'toast-bottom-right'
    };
  }

  showSuccess(message : string) {
    this.toastr.success(message, 'Success !', this.options);
  }

  showError(message : string) {
    this.toastr.error(message, 'Oops !', this.options);
  }

  showWarning(message : string ) {
    this.toastr.warning(message, 'Alert !', this.options);
  }

  showInfo(message : string ) {
    this.toastr.info(message, 'Info', this.options);
  }

}
