import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  UsuarioData: any;

  constructor(public apiService:ApiService, private nav: NavController ){
    this.UsuarioData=[];
  }

  ionViewWillEnter() {
      this.getAllUsuario();
  }
  getAllUsuario(){
    this.apiService.getList().subscribe(Response => {this.UsuarioData = Response;});
  }
  deleteUsuario(item:Usuario){
    this.apiService.deleteItem(item.id).subscribe(Response => this.getAllUsuario());
  }
  editUsuario(item: Usuario){
    this.nav.navigateForward('editar', {state: {item}});
  }
}
