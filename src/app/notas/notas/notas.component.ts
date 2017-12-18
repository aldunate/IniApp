import { Component, OnInit } from '@angular/core';
import { NotasService } from '../service/notas.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from '../../usuario/service/token.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  notas = [{}]; // [{'Nombre': 'Prueba1'}];
  categorias = [{}]; // [{ 'Categoria': 'Deportes', 'Id': 1}, { 'Categoria': 'Politica', 'Id': 2}];
  boolCategorias = false;
  constructor(private http: HttpClient, private notasService: NotasService,
    private router: Router, private tokenService: TokenService) {

    this.notasService.getCategorias(null, this.respuestaCategorias.bind(this));
  }
  respuestaCategorias(categorias) {
    this.categorias = categorias;
    this.boolCategorias = true;
    this.notasService.getNotas(null, this.respuestaNotas.bind(this));
  }

  respuestaNotas(notas) {
    this.notas = notas;
  }

  ngOnInit() { }

}
