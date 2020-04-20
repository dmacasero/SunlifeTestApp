import { TestBed, inject } from "@angular/core/testing";

import { PoliciesService } from "./policies.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { PolicyModel } from "src/app/models/policy/policy.model";

describe("PoliciesService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PoliciesService],
    })
  );

  it("should be created", () => {
    const service: PoliciesService = TestBed.get(PoliciesService);
    expect(service).toBeTruthy();
  });

  it("should return an Observable of All Policies", inject(
    [HttpTestingController, PoliciesService],
    (httpMock: HttpTestingController, dataService: PoliciesService) => {
      const service = TestBed.get(PoliciesService);
      const mockPolicies = [
        {
          name: "Policy Sample",
          policynumber: "432345678",
          status: "Inforce",
          details: [],
          isDue: "",
        },
      ].map((policy: PolicyModel) => new PolicyModel(policy));
      console.log(mockPolicies);
      service.getAllPolicies().subscribe((data: any) => {
        console.log(data);
        expect(data.length).toBe(1);
        expect(Object.assign({}, data)).toEqual(
          Object.assign({}, mockPolicies)
        );
      });

      const mockReq = httpMock.expectOne(dataService.endpoint);

      expect(mockReq.cancelled).toBeFalsy();
      mockReq.flush(mockPolicies);

      httpMock.verify();
    }
  ));
});
