import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  email: string = '';
  username: string = ''; // Variable para almacenar lo que está antes del "@"

  constructor(private route: ActivatedRoute,
              private menucontroller: MenuController,
              private alertcontroller: AlertController 
  ) {}

  ngOnInit() {
    // Obtiene el email de la URL
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];

      // Extraer la parte antes del "@"
      this.username = this.email.split('@')[0];
    })

      
}
  mostrarMenu(){
    this.menucontroller.open('first'); /*permite abrir el menú diseñado en el componente app*/
  }

}
