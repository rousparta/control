import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.component.html',
  styleUrls: ['./asignar.component.css']
})
export class AsignarComponent implements OnInit {
  tecnicos:any;
  lote={
    tecnico:null,
    radiofrecuencia:null
  }
  constructor(public dr:MatDialogRef<AsignarComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.lote.tecnico=data.tecnico;
    this.lote.radiofrecuencia=data.radiofrecuencia;
    console.log(data);
  }

  ngOnInit() {
    this.tecnicos = JSON.parse(localStorage.getItem('usuarios'));
    if(!this.tecnicos) this.tecnicos=[];
    else {
      let usus=[];
      for(var i =0; i<this.tecnicos.length; i++){
        if(this.tecnicos[i].rol=='técnico')
          usus.push(this.tecnicos[i]);
      }
      this.tecnicos=usus;
    }
  }
  guardar(){
    let el=this.data;
    el.tecnico=this.lote.tecnico;
    el.radiofrecuencia=this.lote.radiofrecuencia;
    let lotes = JSON.parse(localStorage.getItem('lotes'));
    let tmp=[];
    lotes[this.data.i].caja[this.data.j].tecnico=this.lote.tecnico;
    lotes[this.data.i].caja[this.data.j].radiofrecuencia=this.lote.radiofrecuencia;
    /*for(var i =0; i<lotes[this.data.i].caja[this.data.j].length; i++){
      if(lotes[i].formulario==el.formulario && lotes[i].empresa==el.empresa) tmp.push(el);
      else tmp.push(lotes[i]);
    }*/
    localStorage.setItem('lotes', JSON.stringify(lotes));
    this.dr.close();
  }
}
