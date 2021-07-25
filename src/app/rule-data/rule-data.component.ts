import { Component, OnInit } from '@angular/core';

import { TreeNode } from 'primeng/api';

import { RuleDataService } from './rule-data.service';

import { TempContent, Condition } from '../../viewmodel';

@Component({
  selector: 'app-rule-data',
  templateUrl: './rule-data.component.html',
  styleUrls: ['./rule-data.component.scss']
})
export class RuleDataComponent implements OnInit {

  /*
  基礎的 fact, operator, value 那些
  */
  basicConds: Array<Condition> = [];

  condIdList: string[] = [];

  // rule tree-table
  public ruleTrees: TreeNode<{ type: string, name: string }>[];

  constructor(private rulDataHttpSvc: RuleDataService) { }

  public get basicCondOptions() {
    return this.basicConds.map((b) => {
      return b.id;
    });
  }


  ngOnInit(): void {

    this.rulDataHttpSvc.getTempContent().subscribe((x) => {

      console.log('x', x);
      this.basicConds = x.conditions;

      this.ruleTrees = x.logic;
    });

    for (let i = 0; i < 26; i++) {
      this.condIdList.push(String.fromCharCode(i + 65))
    }
  }

  public addBasicCond() {

    let basicCond: Condition = {
      id: this.condIdList[this.basicConds.length],
      caseVariable: { name: "", value: "" },
      operator: { name: "", value: "" },
      value: "",
      params: ""
    };
    this.basicConds.push(basicCond);
  }

  removeBasicCond(index: any) {

    this.basicConds.splice(index, 1);

    this.basicConds.map((cond, index: number) => {
      cond.id = this.condIdList[index];
      return cond;
    });
  }

  addAnyRule() {

    let newAny = { data: { type: "anyCond", name: "any" }, children: [] };
    this.ruleTrees = [...this.ruleTrees, newAny];
  }

  addAllRule() {
    let newAll = { data: { type: "allCond", name: "all" }, children: [] };
    this.ruleTrees = [...this.ruleTrees, newAll];
  }

  showRule() {
    console.log('ruleTrees', this.ruleTrees);
  }

  nodeSelect(event: any) {
    console.log('eventttt', event);
  }

  removeCond(node: TreeNode<{ type: string, name: string }>, index: any) {

    console.log(node);

    console.log('index', index);

    if (node.parent == undefined) {

    } else {

      node.parent.children
      node.children.length = 0;
    }
    this.ruleTrees = [...this.ruleTrees];
  }

  addAnyCond(node: TreeNode<{ type: string, name: string }>) {

    let anyNode = { data: { type: "anyCond", name: "any" }, children: [] };

    node.children.push(anyNode)

    this.ruleTrees = [...this.ruleTrees];
  }
  addAllCond(node: TreeNode<{ type: string, name: string }>) {

    let allNode = { data: { type: "allCond", name: "all" }, children: [] };

    node.children.push(allNode)

    this.ruleTrees = [...this.ruleTrees];
  }

  addBasicRule(node: TreeNode<{ type: string, name: string }>) {

    console.log('node', node);
    let allNode = { data: { type: "basic", name: "" }, children: [] };

    node.children.push(allNode)

    this.ruleTrees = [...this.ruleTrees];
  }

}
