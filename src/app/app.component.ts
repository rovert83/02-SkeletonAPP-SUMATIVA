import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public pages = [
    { title: 'Contacto', url: '/contacto', icon: 'mail' },
    { title: 'Categorias', url: '/categorias', icon: 'people' },
    { title: 'Registro', url: '/registro', icon: 'person-add' },
    { title: 'Perfil', url: '/perfil', icon: 'person-add' },
    { title: 'Home', url: '/home', icon: 'person-add' }
  ];


  constructor() {}
}
