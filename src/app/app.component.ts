import { Component } from '@angular/core';

interface Opciones{
  icon: string;
  name: string;
  redirecTo: string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones:Opciones[]=[ 
    {
      icon:'book-outline',
      name: 'Gestion De Eventos',
      redirecTo:'/gestion-eventos'
    },
    {
      icon:'clipboard-outline',
      name: 'Validación Asistencia',
      redirecTo:'/validar-asistencia'
    },
    {
      icon:'exit-outline',
      name: 'Cerrar Sesión',
      redirecTo:'/login'
    },

  ]

  constructor() {}
}
