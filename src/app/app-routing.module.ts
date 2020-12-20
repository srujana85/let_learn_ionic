import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'http',
    loadChildren: () => import('./pages/http/http.module').then( m => m.HttpPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./pages/crud/crud.module').then( m => m.CrudPageModule)
  },
  {
    path: 'twoway',
    loadChildren: () => import('./pages/twoway/twoway.module').then( m => m.TwowayPageModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./pages/todo/todo.module').then( m => m.TodoPageModule)
  },
  {
    path: 'tts',
    loadChildren: () => import('./pages/tts/tts.module').then( m => m.TtsPageModule)
  },
  {
    path: 'draw',
    loadChildren: () => import('./pages/draw/draw.module').then( m => m.DrawPageModule)
  },
  {
    path: 'ocr',
    loadChildren: () => import('./pages/ocr/ocr.module').then( m => m.OcrPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
