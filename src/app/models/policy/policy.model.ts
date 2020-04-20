import { PolicyDetailModel } from "./policy-detail.model";

export class PolicyModel {
  name: string;
  policynumber: string;
  status: string;
  details: PolicyDetailModel[];
  isDue: string;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
