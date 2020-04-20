export class PolicyDetailModel {
  label: string;
  value: string;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
