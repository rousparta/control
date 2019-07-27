import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CambiaPassComponent } from '../cambia-pass/cambia-pass.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input('opcion') opcion:string;
  user:any;
  constructor(private r:Router, public d: MatDialog, public s: MatSnackBar) { 
    this.user=JSON.parse(sessionStorage.getItem('user'));
    if(!this.user) this.r.navigate(['/']);
    if(this.user.rol=='técnico' && (window.location.pathname=='/lote' || window.location.pathname=='/usuario')){
      this.r.navigate(['/dispositivo'])
    }
    
  }

  ngOnInit() {
    
  }
  salir(){
    sessionStorage.removeItem('user');
    this.r.navigate(['/']);
  }
  cambia(){
    const dialog = this.d.open(CambiaPassComponent, {
    });
    dialog.afterClosed().subscribe(res => {
      this.s.open('Contraseña actualizada..','OK');
      this.ngOnInit();
    })
  }
}
