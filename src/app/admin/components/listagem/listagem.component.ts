import { Component, OnInit } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Lancamento, LancamentoService, HttpUtilService, FuncionarioService } from 'src/app/shared';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  dataSource: MatTableDataSource<Lancamento>;
  colunas: string[] = ['data', 'tipo', 'localizacao', 'acao'];
  funcionarioId: string;
  totalLancamentos: number;

  private pagina: number;
  private ordem: string;
  private direcao: string;

  constructor(
    private lancamentoService: LancamentoService,
    private httpUtil: HttpUtilService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private funcionarioService: FuncionarioService
  ) { }

  ngOnInit(): void {
    this.pagina = 0;
    this.ordemPadrao();
    this.exibirLancamentos();
  }

  ordemPadrao() {
    this.ordem = 'data';
    this.direcao = 'DESC';
  }

  exibirLancamentos() {
    this.funcionarioId = '3';

    this.lancamentoService.listarLancamentosPorFuncionario(
      this.funcionarioId, this.pagina, this.ordem, this.direcao
    ).subscribe(
      data => {
        this.totalLancamentos = data['data'].totalElements;
        const lancamentos = data['data'].content as Lancamento[];
        this.dataSource = new MatTableDataSource<Lancamento>(lancamentos);
      },
      err => {
        const msg: string = 'Erro obtendo lançamentos.';
        this.snackBar.open(msg, 'Erro', {duration: 5000});
      }
    );
  }

  remover(lancamentoId: string) {
    alert(lancamentoId);
  }

  paginar(pageEvent: PageEvent) {
    this.pagina = pageEvent.pageIndex;
    this.exibirLancamentos();
  }

  ordenar(sort: Sort) {
    if (sort.direction == '') {
      this.ordemPadrao();
    } else {
      this.ordem = sort.active;
      this.direcao = sort.direction.toUpperCase();
    }

    this.exibirLancamentos();
  }
}
