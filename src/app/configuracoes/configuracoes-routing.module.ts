import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracoesPage } from './configuracoes.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracoesPage,
    children:[
      {
        path: 'perfil',
        loadChildren: () =>
          import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'sobre',
        loadChildren: () =>
          import('../sobre/sobre.module').then(m => m.SobrePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracoesPageRoutingModule {}
