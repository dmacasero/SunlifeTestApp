import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DashboardPageRoutingModule } from "./dashboard-routing.module";

import { DashboardPage } from "./dashboard.page";
import { PolicyServingComponent } from "./components/policy-serving/policy-serving.component";
import { IlasFundsComponent } from "./components/ilas-funds/ilas-funds.component";
import { ClaimsComponent } from "./components/claims/claims.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DashboardPageRoutingModule],
  declarations: [
    DashboardPage,
    IlasFundsComponent,
    PolicyServingComponent,
    ClaimsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardPageModule {}
