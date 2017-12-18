import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BackendInterceptor } from '../../util/service/mockBackend.interceptor';
import { GlobalVar } from '../../util/global';
import { TokenInterceptor } from '../../usuario/service/token.interceptor';

@Injectable()
export class NotasService {
  public id: string;
  public nombre: string;

  constructor(private http: HttpClient,
    private tokenInterceptor: TokenInterceptor
    , private backendInterceptor: BackendInterceptor) { }

  nuevaNota(nota, respuesta) {
    let notaObj: any;
    this.http.post( GlobalVar.uriApi + 'login', {
      'nota': notaObj
    })
      .subscribe((response) => respuesta(response));
  }
  getCategorias(params, respuesta) {
    this.http.post( GlobalVar.uriApi + 'categorias', { })
      .subscribe((response) => respuesta(response));
  }

  getNotas(params, respuesta) {
    this.http.post( GlobalVar.uriApi + 'notas', { })
      .subscribe((response) => respuesta(response));
  }

}



/*
  BLOGGER API

AIzaSyASX5dpkt1bRJGe-Lyn_yP-HFsmIzCcLZk API KEY
Client ID	 872825159800-62688oe7h9a7mujk669c3f9c326somq9.apps.googleusercontent.com
 */
