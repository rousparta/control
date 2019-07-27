import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormComponent } from './usuario/form/form.component';
import { LoteComponent } from './lote/lote.component';
import { FormComponent as loteformComponent } from './lote/form/form.component';
import { DispositivoComponent } from './dispositivo/dispositivo.component';
import { FormComponent as dispositivoformComponent } from './dispositivo/form/form.component';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import {MatCardModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatToolbarModule, MatMenuModule, MatIconModule, MatProgressBarModule, MatTableModule, MatDialogModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatExpansionModule, MatTabsModule } from '@angular/material';
import { AsignarComponent } from './lote/asignar/asignar.component';
import { RadiofrecuenciaComponent } from './lote/radiofrecuencia/radiofrecuencia.component';
import { ImeiComponent } from './dispositivo/imei/imei.component';
import { CambiaPassComponent } from './cambia-pass/cambia-pass.component';
import { BarrasComponent } from './dispositivo/barras/barras.component';
import { ConformeComponent } from './dispositivo/conforme/conforme.component';
import { NoconformeComponent } from './dispositivo/noconforme/noconforme.component';

//Para código de barras
import { NgxBarcodeModule } from 'ngx-barcode';
import { CertificadoComponent } from './dispositivo/certificado/certificado.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    FormComponent,
    LoteComponent,
    DispositivoComponent,
    MenuComponent,
    LoginComponent,
    loteformComponent,
    AsignarComponent,
    RadiofrecuenciaComponent,
    ImeiComponent,
    CambiaPassComponent,
    dispositivoformComponent,
    BarrasComponent,
    ConformeComponent,
    NoconformeComponent,
    CertificadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatProgressBarModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule,
    NgxBarcodeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[FormComponent, loteformComponent, AsignarComponent, RadiofrecuenciaComponent, ImeiComponent, CambiaPassComponent]
})
export class AppModule { }
