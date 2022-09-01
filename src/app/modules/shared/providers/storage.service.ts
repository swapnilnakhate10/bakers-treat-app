import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() { }

    // declare constants here
    public static AUTH_TOKEN: string = 'auth_token';
    public static USER_ID: string = 'user_id';
    public static EMAIL: string = 'email';
    public static FIRST_NAME: string = 'first_name';
    public static LAST_NAME: string = 'last_name';
    public static IS_ADMIN: string = 'is_admin';

    public static set(key: string, value: any): void {
        if(key !== null && value !== null && key !== undefined && value !== undefined ) {
          localStorage.setItem(key, value);
        }
    }

    public static get(key: string): any {
        if(key !== null && key !== undefined) {
          return localStorage.getItem(key);
        } else {
          return '';
        }
    }

    public static remove(key: string): void {
      if(key !== null && key !== undefined) {
        localStorage.removeItem(key);
      }
    }

    public static removeAll(): void {
      localStorage.clear();
    }
}
