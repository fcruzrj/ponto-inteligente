import { PtBrMatPaginationIntl, TipoPipe, DataPipe } from './';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';

@NgModule({
  declarations: [
    MascaraDirective,
    TipoPipe,
    DataPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective,
    TipoPipe,
    DataPipe
  ],
  providers: [
    PtBrMatPaginationIntl
  ]
})
export class SharedModule { }
