import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string ="";
  pass:number =0;

  user={
    usuario:'',
    pass:''
  }

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() { }

 ingresarlog (){
    let navigationExtras: NavigationExtras = {
      state:{ 
        usuarioIngresado: this.usuario,
        passIngresado: this.pass
      }
    }
    this.router.navigate(['/registro'],navigationExtras);
   }

 ingresar (){
  this.presentAlert(this.usuario, this.pass);
 }

 async presentAlert(usuario: string, pass: number) {
  const alert = await this.alertController.create({
    header: 'Registraras los siguientes datos:',
    subHeader: '¿es correcto?',
    message: `Usuario: ${usuario}\nPass: ${pass}`, // Usar los argumentos aquí
    buttons: [
      {
        text: 'OK',
        handler: () => {
          this.ingresarlog(); // Llama a la función al hacer clic en "OK"
        },
      },
    ],
  });

  await alert.present();
}



}
