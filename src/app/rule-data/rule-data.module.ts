import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';

import { RuleDataComponent } from './rule-data.component';

@NgModule({
  declarations: [RuleDataComponent],
  imports: [
    CommonModule,
    FormsModule,

    DropdownModule,
    FieldsetModule,
    TableModule,
    TreeTableModule
  ],
  exports: [RuleDataComponent]
})
export class RuleDataModule { }
