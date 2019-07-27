import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  roles=[];
  user={
    nro:null,
    usuario:'',
    nombres:'',
    apellidos:'',
    rol:'',
    clave:null
  }
  titulo="Registro de usuario";
  constructor(public dr:MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    if(data.nro) this.titulo="Actualización de usuario";
    this.user=data;
    this.roles=JSON.parse(localStorage.getItem('roles'));
    if(!this.roles) this.roles=[];
  }

  ngOnInit() {
  }
  guardar(){
    let usus=JSON.parse(localStorage.getItem('usuarios'));
    if(this.user.nro)
      usus[this.user.nro-1]=this.user;    
    else {
      this.user.clave=this.user.usuario;
      usus.push(this.user);
    }
    localStorage.setItem('usuarios', JSON.stringify(usus));
    this.dr.close();
  }
}
