import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormComponent } from './form/form.component';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { AsignarComponent } from './asignar/asignar.component';

@Component({
  selector: 'app-lote',
  templateUrl: './lote.component.html',
  styleUrls: ['./lote.component.css']
})
export class LoteComponent implements OnInit {
  lotes:any;
  cargando=false;
  
  displayedColumns: string[] = ['formulario', 'empresa', 'marca', 'cantidad', 'conforme','noconforme','clave'];
  dataSource:any;

  constructor(public d: MatDialog, public s: MatSnackBar, public r:Router) { }

  ngOnInit() {
    this.cargando=false;
    this.lotes=JSON.parse(localStorage.getItem('lotes'));
    if(!this.lotes) this.lotes=[];
    for(var i=0; i<this.lotes.length; i++){
      let conf=0;
      let noconf=0;
      if(this.lotes[i].caja!=null){
        for(var j=0; j<this.lotes[i].caja.length; j++){
          for(var k=0; k<this.lotes[i].caja[j].dispositivos.length; k++){
            if(this.lotes[i].caja[j].dispositivos[k].control) conf++;
            else if (this.lotes[i].caja[j].dispositivos[k].control === false ) noconf++;
          }
        }
      }
      this.lotes[i].conforme=conf;
      this.lotes[i].noconforme=noconf;
    }
    this.dataSource = new MatTableDataSource(this.lotes);
    this.cargando=true;
  }
  add(){
    const dialog = this.d.open(FormComponent, {
      data: {
        formulario:'',
        empresa:'',
        modelo:'',
        cantidad:0,
        componentes:[],
        peso:''//
      }
    });
    dialog.afterClosed().subscribe(res => {
      this.s.open('Lote registrado..','OK');
      this.ngOnInit();
    })
  }
  editar(elem){
    elem.nro=1;
    const dialog = this.d.open(FormComponent, {
      data: elem
    });
    dialog.afterClosed().subscribe(res => {
      this.s.open('Lote actualizado..','OK');
      this.ngOnInit();
    })
  }
  asignar(elem){
    const dialog = this.d.open(AsignarComponent, {
      data: elem
    });
    dialog.afterClosed().subscribe(res => {
      this.s.open('Asignación completada..','OK');
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  barras(elem){
    localStorage.setItem('tmpLote', JSON.stringify(elem));
    this.r.navigate(['/codigobarras']);
  }
}
