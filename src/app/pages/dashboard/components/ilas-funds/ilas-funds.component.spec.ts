import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { IlasFundsComponent } from "./ilas-funds.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("IlasFundsComponent", () => {
  let component: IlasFundsComponent;
  let fixture: ComponentFixture<IlasFundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IlasFundsComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(IlasFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
