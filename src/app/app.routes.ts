import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { StoreComponent } from './pages/store/store.component';
import { CartComponent } from './pages/cart/cart.component';

const brandName = "032 Cartel";

export const routes: Routes = [
    {
        path: "",
        component: HomepageComponent,
        title: `${brandName} | Home`
    },
    {
        path: "store",
        component: StoreComponent,
        title: `${brandName} | Store`
    },
    {
        path: "cart",
        component: CartComponent,
        title: `${brandName} | Cart`
    },
    {
        path: "signin",
        component: LoginpageComponent,
        title: `${brandName} | Sign In`
    },
    {
        path: "signup",
        component: RegisterpageComponent,
        title: `${brandName} | Sign Up`
    },
];
