import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-imei',
  templateUrl: './imei.component.html',
  styleUrls: ['./imei.component.css']
})
export class ImeiComponent implements OnInit {
  cj={
    codigo:'',
    imei:''
  }
  displayedColumns: string[] = ['nro', 'codigo', 'marca', 'imei'];
  dataSource:any;
  disp=[];
  constructor(public dr:MatDialogRef<ImeiComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    
  }

  ngOnInit() {
    this.disp=[];
    for(var i=0; i<this.data.dispositivos.length; i++)
      this.disp.push(this.data.dispositivos[i]);
    this.dataSource = new MatTableDataSource(this.disp);
  }
  cambiaC(){
    for(var i=0; i<this.disp.length; i++)
      this.disp[i].codigo=this.cj.codigo+i;    
    this.ngOnInit();
    console.log(this.disp);
  }
  cambiaI(){
    for(var i=0; i<this.disp.length; i++)
      this.disp[i].imei=this.cj.imei;
    
  }
  guardar(){
    let dt = this.data;
    if(dt.codigo=='')
      dt.codigo=new Date().getTime();
    dt.dispositivos=this.disp;
    let lor = JSON.parse(localStorage.getItem('lotes'));
    lor[dt.i].caja[dt.j]=dt;
    localStorage.setItem('lotes', JSON.stringify(lor));
    this.dr.close();
  }
  escribe(texto, codigo){
    // if(codigo=='Enter') presionar tab
  }
}
