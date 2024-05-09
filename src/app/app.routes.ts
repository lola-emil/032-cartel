import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { StoreComponent } from './pages/store/store.component';
import { CartComponent } from './pages/cart/cart.component';
import { DashboardpageComponent } from './pages/admin/dashboard/dashboardpage/dashboardpage.component';
import { ProfilepageComponent } from './pages/profilepage/profilepage.component';
import { ProductlistpageComponent } from './pages/admin/products/productlistpage/productlistpage.component';
import { AddproductpageComponent } from './pages/admin/products/addproductpage/addproductpage.component';

const brandName = '032 Cartel';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: `${brandName} | Home`,
  },
  {
    path: 'store',
    component: StoreComponent,
    title: `${brandName} | Store`,
  },
  {
    path: 'cart',
    component: CartComponent,
    title: `${brandName} | Cart`,
  },
  {
    path: 'signin',
    component: LoginpageComponent,
    title: `${brandName} | Sign In`,
  },
  {
    path: 'signup',
    component: RegisterpageComponent,
    title: `${brandName} | Sign Up`,
  },
  {
    path: 'profile',
    component: ProfilepageComponent,
    title: `${brandName} | User Profile`,
  },

  //admin pages
  {
    path: 'admin',
    redirectTo: 'admin/dashboard',
  },

  {
    path: 'admin/dashboard',
    component: DashboardpageComponent,
    title: `${brandName} | Admin Dashboard`,
  },
  {
    path: 'admin/products',
    component: ProductlistpageComponent,
    title: `${brandName} | Product List`,
  },
  {
    path: 'admin/addProduct',
    component: AddproductpageComponent,
    title: `${brandName} | Add Product`,
  },
];
