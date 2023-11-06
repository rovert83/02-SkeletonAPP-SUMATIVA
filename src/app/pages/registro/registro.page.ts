import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre="";
  apellido="";
  correo="";
  telefono="";
 
   usuario1="";
   pass1=0;

  constructor(private router: Router,private activedRouter: ActivatedRoute){
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state){
          this.usuario1 = this.router.getCurrentNavigation()?.extras.state?.['usuarioIngresado'];
          this.pass1 = this.router.getCurrentNavigation()?.extras.state?.['passIngresado'];
      }
    })
   }

   fullgohome (){
    let navigationExtras: NavigationExtras = {
      state:{ 
        nombreIngresado: this.nombre,
        apellidoIngresado: this.apellido,
        talefonoIngresado: this.telefono,
        correoIngresado: this.correo
      }
    }
    this.router.navigate(['/home'],navigationExtras);
   }



  ngOnInit() {
  }

}
