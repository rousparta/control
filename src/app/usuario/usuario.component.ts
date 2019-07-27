import { FormComponent } from './form/form.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios:any;
  roles:any;
  cargando=false;
  
  displayedColumns: string[] = ['nro', 'usuario', 'nombres', 'apellidos', 'rol','clave'];
  dataSource:any;
  
  constructor(public d: MatDialog, public s: MatSnackBar) { 
    
    this.roles=JSON.parse(localStorage.getItem('roles'));
    if(!this.roles){
      this.roles=['administrador','supervisor','técnico'];
      localStorage.setItem('roles', JSON.stringify(this.roles));
    }
  }

  ngOnInit() {
    this.cargando=false;
    this.usuarios=JSON.parse(localStorage.getItem('usuarios'));
    if(!this.usuarios) this.usuarios=[];
    let usus=[];
    for(var i=0; i<this.usuarios.length; i++)
      usus.push({nro:i+1, usuario:this.usuarios[i].usuario, nombres:this.usuarios[i].nombres, apellidos:this.usuarios[i].apellidos, rol:this.usuarios[i].rol, clave:this.usuarios[i].clave});
    this.dataSource = new MatTableDataSource(usus);
    this.cargando=true;
  }
  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editar(elem){
    const dialog = this.d.open(FormComponent, {
      data: elem
    });
    dialog.afterClosed().subscribe(res => {
      this.s.open('Usuario actualizado..','OK');
      this.ngOnInit();
    })
  }
  add(){
    const dialog = this.d.open(FormComponent, {
      data: {
        usuario:'',
        nombres:'',
        apellidos:'',
        rol:''
      }
    });
    dialog.afterClosed().subscribe(res => {
      this.s.open('Usuario registrado..','OK');
      this.ngOnInit();
    })
  }
  asignar(elem){

  }
}
