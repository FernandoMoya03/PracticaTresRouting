import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquisComponent } from './Components/equis/equis.component';
import { YEHComponent } from './Components/yeh/yeh.component';
import { NotfoundComponent} from './Components/notfound/notfound.component'
import { VerificarEdadGuard } from './Guards/verificar-edad.guard';



const routes: Routes = [
    {
      path:'',redirectTo:'hola',pathMatch:'full'
    },
    {
      path:'hola',component:EquisComponent
    },
    {
      path:'quetal',component:YEHComponent,
      canActivate:[VerificarEdadGuard]
    },
    {
      path:'**',component:NotfoundComponent
    }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
