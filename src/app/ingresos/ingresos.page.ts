import { Component, OnInit } from '@angular/core';
import {Storage}from '@ionic/storage-angular';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
})
export class IngresosPage implements OnInit {

  constructor(private storage:Storage) { }
  async ngOnInit() {
    await this.storage.create();
    this.activos=await this.storage.get('activos');
  }

  nombre = "";
  descripcion = "";
  fecha = "";
  valor = "";

  activos = []
  

  async guardarActivos(){
    if(this.activos==null){
      this.activos=[]
    }
    this.activos.push({nombre:this.nombre, descripcion:this.descripcion, fecha:this.fecha, valor:this.valor})
    await this.storage.set('activos',this.activos)
    this.nombre="";
    this.descripcion="";
    this.fecha="";
    this.valor="";

    
  }
  async limpiar(){
    if(this.activos==null){
      this.activos=[]
    }
    await this.storage.remove('activos')
    this.nombre="";
    this.descripcion="";
    this.fecha="";
    this.valor="";

    
  }

  

}
