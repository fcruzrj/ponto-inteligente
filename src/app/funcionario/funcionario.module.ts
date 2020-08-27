import { LancamentoService } from './../shared/services/lancamento.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent, LancamentoComponent, FuncionarioComponent } from './components';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpUtilService, PtBrMatPaginationIntl } from '../shared';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListagemComponent, 
    LancamentoComponent,
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    SharedModule
  ],
  providers: [
    HttpUtilService,
    LancamentoService,
    {provide: MatPaginatorIntl, useClass: PtBrMatPaginationIntl}
  ]
})
export class FuncionarioModule { }
