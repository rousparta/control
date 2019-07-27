import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { ImeiComponent } from './imei/imei.component';
import { AsignarComponent } from '../lote/asignar/asignar.component';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.css']
})
export class DispositivoComponent implements OnInit {
  user:any;
  lotes:any;
  cargando=false;
  
  displayedColumns: string[] = ['i', 'codigo', 'dispositivos', 'tecnico', 'j'];
  dataSource:any;
  cajas:any;
  nro=1;
  constructor(public d: MatDialog, public s: MatSnackBar, public r: Router) { 
    this.user=JSON.parse(sessionStorage.getItem('user'));
    if(!this.user) this.user=null;
  }

  ngOnInit() {
    this.cargando=false;
    this.cajas=[];
    this.nro=Number(localStorage.getItem('nro'));
    this.lotes=JSON.parse(localStorage.getItem('lotes'));
    let sw=false;
    if(!this.lotes) this.lotes=[];
    
    if(!this.nro) this.nro=1;
    for(var i=0; i<this.lotes.length; i++){
      if(!this.lotes[i].caja){
        sw=true;
        this.lotes[i].caja=[];
        for(var j=0; j<this.lotes[i].cajas;j++){
          let disps=[];
          for(var k=0; k<this.lotes[i].equipos;k++)
            disps.push({nro:this.nro++, control:'', imei:''});
          this.lotes[i].caja.push({codigo:'', dispositivos:disps, marca:this.lotes[i].marca})
        }
        localStorage.setItem('nro', JSON.stringify(this.nro));
      }
      for(var j=0; j<this.lotes[i].caja.length; j++){
        let cj=this.lotes[i].caja[j];
        cj.i=i;
        cj.j=j;
        this.cajas.push(cj);
      }
    }
    if(sw) localStorage.setItem('lotes', JSON.stringify(this.lotes));
    
    this.dataSource = new MatTableDataSource(this.cajas.reverse());
    this.cargando=true;
  }
  gestionar(elem){
    const dialog = this.d.open(ImeiComponent, {
      data: elem
    });
    dialog.afterClosed().subscribe(res => {
      this.ngOnInit();
      this.s.open('Gestión completada..','OK');
    })
  }
  control(elem){
    localStorage.setItem('tmpQA', JSON.stringify(elem));
    this.r.navigate(['/control']);
  }
  barras(elem){
    localStorage.setItem('tmpQA', JSON.stringify(elem));
    this.r.navigate(['/codigobarras']);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
    //Revisar código par el filtrado console.log(filterValue.trim().toLowerCase());
  }
  asignar(element){
    const dialog = this.d.open(AsignarComponent, {
      data: element
    });
    dialog.afterClosed().subscribe(res => {
      this.s.open('Asignación completada..','OK');
    })
  }
}
