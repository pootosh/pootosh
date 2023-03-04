import { HomeComponent } from './core/home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from './core/header/header.component';
import { BlogComponent } from './core/blog/blog.component';
import { AboutComponent } from './core/about/about.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

  },

  {
    path: 'home',
    component: HomeComponent,
    children: [

    ]

  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  }
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]


})

export class AppRoutingModule {

}
