import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';
import { RegisterComponent } from './pages/register/register.component';
import { HashComponent } from './pages/hash/hash.component';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { CalComponent } from './pages/cal/cal.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {path: '', 
  redirectTo:'/home', 
  pathMatch: 'full'},

  
  {path: 'calculate',
  redirectTo: '/calculate',
  pathMatch: 'full',},

  {path: 'market',
  redirectTo: '/market',
  pathMatch: 'full',},

  {path: 'hash',
  redirectTo: '/hash',
  pathMatch: 'full',},

  {path: 'signup',
  redirectTo: '/signup',
  pathMatch: 'full',},

  {
    path: 'dashboard',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },

  {path: 'login', 
  component:LoginComponent},

  {path: 'calculate', 
  component:CalComponent},

  {path: 'hash', 
  component:HashComponent},

  {path: 'signup', 
  component:RegisterComponent},

 
  

  {path: 'home',
  component:HomeComponent},
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'editors',
        loadChildren: './views/editors/editors.module#EditorsModule'
      },
      {
        path: 'forms',
        loadChildren: './views/forms/forms.module#FormsModule'
      },
      {
        path: 'google-maps',
        loadChildren: './views/google-maps/google-maps.module#GoogleMapsModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'plugins',
        loadChildren: './views/plugins/plugins.module#PluginsModule'
      },
      {
        path: 'tables',
        loadChildren: './views/tables/tables.module#TablesModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'uikits',
        loadChildren: './views/uikits/uikits.module#UIKitsModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      }
    ]
    
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
