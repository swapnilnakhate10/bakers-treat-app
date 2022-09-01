import { environment } from './../../environments/environment';

export class URLDetails {
    public static USER_LOGIN = environment.serverURL + 'v1/users/login';
    public static USERS = environment.serverURL + 'v1/users/';

    public static MENU = environment.serverURL + 'v1/menus/';
    public static CATEGORY = environment.serverURL + 'v1/menus/category/';
    public static ORDERS = environment.serverURL + 'v1/orders/';
    public static ALL_TABLES = environment.serverURL + 'v1/orders/tables';
    public static TODAYS_SALE = environment.serverURL + 'v1/orders/today';
    public static DATEWISE_SALE = environment.serverURL + 'v1/orders/datewise';
}
