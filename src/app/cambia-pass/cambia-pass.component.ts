import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cambia-pass',
  templateUrl: './cambia-pass.component.html',
  styleUrls: ['./cambia-pass.component.css']
})
export class CambiaPassComponent implements OnInit {
  user:any;
  pass={
    nuevo2:'',
    nuevo:''
  }
  usuarios=[];
  constructor(public dr:MatDialogRef<CambiaPassComponent>, public s:MatSnackBar) { }

  ngOnInit() {
    this.user=JSON.parse(sessionStorage.getItem('user'));
    this.usuarios=JSON.parse(localStorage.getItem('usuarios'));
  }
  guardar(){
    if(this.pass.nuevo==this.pass.nuevo2 && this.pass.nuevo.trim()!=""){
      for(var i=0; i< this.usuarios.length; i++){
        if(this.usuarios[i].usuario==this.user.usuario)
          this.usuarios[i].clave=this.pass.nuevo;
      }
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
      this.dr.close();
    } else this.s.open('Las contraseñas no son iguales', ':(');
    
  }
}
