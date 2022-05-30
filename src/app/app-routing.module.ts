import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Modulos
import { PagesRoutinModule } from './pages/pages.routing';
import { AuthRoutinModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [

  // path : '/dashboard' PagesRouting
  // path : '/auth' AuthRouting


  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutinModule,
    AuthRoutinModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
