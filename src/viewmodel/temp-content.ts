import { Template } from './template';
import { TreeNode } from 'primeng/api'
export class TempContent {

  logic: TreeNode<{ type: string, name: string }>[];

  conditions: Condition[];

  message: Message[];
}

export class Condition {

  id: string;
  caseVariable: Template;
  operator: Template;
  value: any;
  params: string;
}

export class Message {

  ruleID: number;
  msgClass: TempContent;
  msgParams: any;
  content: string;
}

