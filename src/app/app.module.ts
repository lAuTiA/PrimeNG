import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import {CardModule} from 'primeng/card';
import {ImageModule} from 'primeng/image';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CarouselModule } from 'primeng/carousel';
import {GalleriaModule} from  'primeng/galleria';
import {RadioButtonModule} from  'primeng/radiobutton';
import {CheckboxModule} from  'primeng/checkbox';
import {ToggleButtonModule} from 'primeng/togglebutton';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    CardModule,
    ImageModule,
    ButtonModule,
    CarouselModule,
    GalleriaModule,
    RadioButtonModule,
    CheckboxModule,
    ToggleButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
