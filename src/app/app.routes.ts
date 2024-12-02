import { Routes } from '@angular/router';
import { LibroComponent } from './libro/libro.component';

export const routes: Routes = [
    {
        path:'',
        component: LibroComponent,
        title:'home'
    },
    {
        path:'libro',
        component: LibroComponent,
        title:'libro'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];
