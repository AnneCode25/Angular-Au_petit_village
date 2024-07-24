import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
        { path: '', component: HomePageComponent},
        { path: 'product/:id', component: ProductDetailComponent },
        { path: 'about', component: AboutComponent},
        { path: '**', component: NotFoundComponent },

];
