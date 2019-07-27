import { MatSnackBar } from '@angular/material';
import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data={
    dispositivos:[],
    i:0,
    j:0
  }
  constructor(public s:MatSnackBar) { 
    this.data=JSON.parse(localStorage.getItem('tmpQA'));
    
  }

  ngOnInit() {
  }
  saveControl(elem, tipo) {
    
    elem.control=tipo;
    let sw=false;
    for(var i=0; i< this.data.dispositivos.length; i++){
      if(this.data.dispositivos[i].nro==elem.nro){
        this.data.dispositivos[i]=elem;
        sw=true;  
      }
    }
    if(sw){
      let todo = JSON.parse(localStorage.getItem('lotes'));
      todo[this.data.i].caja[this.data.j]=this.data;
      localStorage.setItem('lotes', JSON.stringify(todo));
      localStorage.setItem('tmpQA', JSON.stringify(this.data));
      this.s.open('Control de calidad Guardado.');
    }
  }

}
