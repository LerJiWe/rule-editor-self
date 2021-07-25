import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleListComponent } from './rule-list.component';

@NgModule({
  declarations: [RuleListComponent],
  imports: [
    CommonModule
  ],
  exports: [RuleListComponent]
})
export class RuleListModule { }
