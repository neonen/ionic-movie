import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      
      {
        path: 'config',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../configuracoes/configuracoes.module').then(m => m.ConfiguracoesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full'
      },
      { path: 'feed', loadChildren: () => import('../feed/feed.module').then(m=> m.FeedPageModule) },
      
    ]
    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
