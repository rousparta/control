import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    usuario:'',
    clave:''
  }
  usuarios=null;
  constructor(private s:MatSnackBar, private r:Router) {
    if(sessionStorage.getItem('user')) this.r.navigate(['/lote']);

    this.usuarios=JSON.parse(localStorage.getItem('usuarios'));
    if(!this.usuarios){
      this.usuarios=[];
      this.usuarios.push({usuario:'rocio', clave:'123', token:'111'});
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    }
  }

  ngOnInit() {
  }
  ingresar(){
    let sw=false;
    for(var i=0; i<this.usuarios.length; i++){
      if(this.usuarios[i].usuario==this.user.usuario && this.usuarios[i].clave==this.user.clave){
        sw=true;
        sessionStorage.setItem('user', JSON.stringify(this.usuarios[i]));
        if(this.usuarios[i].rol!='técnico')
          this.r.navigate(['/lote']);
        else
        this.r.navigate(['/dispositivo']);
      }
    }
    if(!sw) this.s.open('Usuario y/o contraseña incorrectos', ':(');
  }
}
