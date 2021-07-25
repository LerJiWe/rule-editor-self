import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabViewModule } from 'primeng/tabview';

import { RuleListModule } from '../rule-list/rule-list.module';
import { RuleDataModule } from '../rule-data/rule-data.module';

import { RuleEditorComponent } from './rule-editor.component';

@NgModule({
  declarations: [RuleEditorComponent],
  imports: [
    CommonModule,

    TabViewModule,

    RuleListModule,
    RuleDataModule
  ],
  exports: [RuleEditorComponent]
})
export class RuleEditorModule { }
