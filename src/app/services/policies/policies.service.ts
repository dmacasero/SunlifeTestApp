import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { PolicyModel } from "src/app/models/policy/policy.model";

@Injectable({
  providedIn: "root",
})
export class PoliciesService {
  endpoint = "../assets/data/policy-get.json";

  constructor(private http: HttpClient) {}

  getAllPolicies(): Observable<PolicyModel[]> {
    return this.http.get(this.endpoint).pipe(
      map((policies: PolicyModel[]) => {
        return policies.map((policy: PolicyModel) => new PolicyModel(policy));
      })
    );
  }
}
