import { CertificadoComponent } from './dispositivo/certificado/certificado.component';
import { NoconformeComponent } from './dispositivo/noconforme/noconforme.component';
import { ConformeComponent } from './dispositivo/conforme/conforme.component';
import { BarrasComponent } from './dispositivo/barras/barras.component';
import { FormComponent } from './dispositivo/form/form.component';
import { DispositivoComponent } from './dispositivo/dispositivo.component';
import { LoteComponent } from './lote/lote.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'usuario', component: UsuarioComponent, pathMatch: 'full'},
  {path: 'lote', component: LoteComponent, pathMatch: 'full'},
  {path: 'dispositivo', component: DispositivoComponent, pathMatch: 'full'},
  {path: 'control', component: FormComponent, pathMatch: 'full'},
  {path: 'codigobarras', component: BarrasComponent, pathMatch: 'full'},
  {path: 'conformes', component: ConformeComponent, pathMatch: 'full'},
  {path: 'noconformes', component: NoconformeComponent, pathMatch: 'full'},
  {path: 'certificado', component: CertificadoComponent, pathMatch: 'full'},
  {path: '**', redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
