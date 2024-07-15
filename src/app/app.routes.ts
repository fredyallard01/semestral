import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then(mod => {
      console.log(mod); // Verificar si el módulo contiene RegistroPage
      return mod.registroPage;
    })
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'post',
    loadComponent: () => import('./post/post.page').then( m => m.PostPage)
  },
  {
    path: 'publicacion',
    loadComponent: () => import('./publicacion/publicacion.page').then( m => m.PublicacionPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },

];
