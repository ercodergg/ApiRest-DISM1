import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.page.html',
  styleUrls: ['./nuevo.page.scss'],
})
export class NuevoPage implements OnInit {
  UsuarioData: any;
  constructor(public activatedRoute: ActivatedRoute,public router: Router,public apiService:ApiService) { } 
  ngOnInit() {
    this.UsuarioData=new Usuario();
  }


  // Método para obtener usuarios de db.json
  newUsuario() {
    console.log(this.UsuarioData.nombre);
    this.apiService.createItem(this.UsuarioData).subscribe((Response)=> { this.router.navigate(['home'])});
  }

}
