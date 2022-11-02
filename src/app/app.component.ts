import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoPNGSM';


items: MenuItem[] = [];
ngOnInit() {
  this.items = [
    {
      label:'Home',
      icon:'pi pi-fw pi-home',
      routerLink:"inicio"
    },
    {
      label:'Productos',
      icon:'pi pi-fw pi-cart-plus',
      routerLink:'productos'
    },
    {
      label:'contacto',
      icon:'pi pi-fw pi-user',
      routerLink:'contacto'
    }
  ];
}
}

