import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor() { }

  headers(): any {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    console.log(localStorage['token']);

    if (localStorage['token']) {
      console.log('entrei');
      httpHeaders = httpHeaders.set('Authorization', `Bearer ${localStorage['token']}`);
      console.log(httpHeaders);
    }

    return {header: httpHeaders};
  }

  obterIdUsuario(): string {
    if (!localStorage['token']) {
      return '';
    }
    const dadosUsuario = this.obterDadosUsuario();
    return dadosUsuario ? dadosUsuario.id : '';
  }

  obterIdEmpresa(): string {
    if (!localStorage['token']) {
      return '';
    }
    const dadosUsuario = this.obterDadosUsuario();
    return dadosUsuario ? dadosUsuario.empresaId : '';
  }

  obterDadosUsuario() {
    if (!localStorage['token']) {
      return '';
    }

    return JSON.parse(atob(localStorage['token'].split('.')[1]));
  }
}
