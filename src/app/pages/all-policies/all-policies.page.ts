import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PoliciesService } from "src/app/services/policies/policies.service";
import { PolicyModel } from "src/app/models/policy/policy.model";

@Component({
  selector: "app-all-policies",
  templateUrl: "./all-policies.page.html",
  styleUrls: ["./all-policies.page.scss"],
})
export class AllPoliciesPage implements OnInit {
  policies: Observable<PolicyModel[]>;

  constructor(private policySrvc: PoliciesService) {}

  ngOnInit() {
    this.policies = this.policySrvc.getAllPolicies();
  }
}
