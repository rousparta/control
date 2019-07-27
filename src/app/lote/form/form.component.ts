import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  lote={
    nro:null,
    empresa:'',
    formulario:'',
    entrega:'',
    devolucion:'',
    marca:'',
    cantidad:0,
    equipos:0,
    cajas:0,
    componentes:[],
    caja:[],
    proveedor:"",
    peso:''//
  }
  componentes:any;
  titulo="Registro de lote";
  cambiar=false;
  constructor(public dr:MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    if(data.nro) this.titulo="Actualización de lote";
    this.lote=data;
    this.componentes=JSON.parse(localStorage.getItem('componentes'));
    if(!this.componentes){
      //Array de componentes
      this.componentes=['Batería Externa', 'Cargador', 'Cable USB', 'Batería Interna', 'Manual', 'Manos libres'];
      localStorage.setItem('componentes', JSON.stringify(this.componentes));
    }
  }

  ngOnInit() {
    if(this.data.conforme>0 && this.data.noconforme>0)
      this.cambiar=true;
  }
  guardar(){
    let lot=JSON.parse(localStorage.getItem('lotes'));
    if(!lot) lot=[];
    if(this.lote.nro)
      lot[this.lote.nro-1]=this.lote;    
    else 
      lot.push(this.lote);
    localStorage.setItem('lotes', JSON.stringify(lot));
    this.dr.close();
  }
  select(elem){
    let ind = this.lote.componentes.indexOf(elem);
    if(ind==-1) this.lote.componentes.push(elem);
    else this.lote.componentes.splice(ind, 1);
  }
}
