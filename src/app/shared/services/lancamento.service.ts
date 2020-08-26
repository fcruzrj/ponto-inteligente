import { environment as env } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import { Lancamento } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  private readonly PATH: string = 'lancamentos';
  private readonly PATH_ULTIMO_LANC = '/funcionario/{funcionarioId}/ultimo';
  private readonly PATH_LANCAMENTOS = '/funcionario/{funcionarioId}';
  private readonly PATH_TODOS_LANC = '/funcionario/{funcionarioId}/todos';

  constructor(
    private http: HttpClient,
    private httpUtil: HttpUtilService
  ) { }

  buscarUltimoLancamento(): Observable<any> {
    console.log(this.httpUtil.headers());
    return this.http.get(
      env.baseApiUrl + this.PATH + this.PATH_ULTIMO_LANC.replace(
        '{funcionarioId}', this.httpUtil.obterIdUsuario()), this.httpUtil.headers()
    );
  }

  cadastrar(lancamento: Lancamento): Observable<any> {
    return this.http.post(
      env.baseApiUrl + this.PATH, lancamento, this.httpUtil.headers()
    );
  }
}
