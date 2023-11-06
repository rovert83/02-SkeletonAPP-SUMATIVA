import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombre1="";
  apellido1="";
  correo1="";
  telefono1="";


  usuario1="";
  pass1=0;

 constructor(private router: Router,private activedRouter: ActivatedRoute){
   this.activedRouter.queryParams.subscribe(params => {
     if (this.router.getCurrentNavigation()?.extras.state){
         this.nombre1 = this.router.getCurrentNavigation()?.extras.state?.['nombreIngresado'];
         this.apellido1 = this.router.getCurrentNavigation()?.extras.state?.['apellidoIngresado'];
         this.correo1 = this.router.getCurrentNavigation()?.extras.state?.['correoIngresado'];
         this.telefono1 = this.router.getCurrentNavigation()?.extras.state?.['telefonoIngresado'];
     }
   })



   this.activedRouter.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation()?.extras.state){
        this.usuario1 = this.router.getCurrentNavigation()?.extras.state?.['usuario1'];
        this.pass1 = this.router.getCurrentNavigation()?.extras.state?.['pass1'];
    }
  })



  }

  ngOnInit() {
  }

}
