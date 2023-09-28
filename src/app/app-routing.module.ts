import { MuralComponent } from './componentes/pensamentos/mural/mural.component';
import { CriarPensamentosComponent } from './componentes/criar-pensamentos/criar-pensamentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {

    path:'',
    redirectTo: 'Mural',  
    pathMatch: 'full',
    
    },

{

path: 'criar-pensamentos',
component: CriarPensamentosComponent

},
{

  path: 'Mural',
  component: MuralComponent
}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
