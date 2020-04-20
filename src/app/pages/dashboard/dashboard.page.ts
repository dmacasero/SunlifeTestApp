import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  segmentDashboard = "ilas";
  timePeriod = "";

  constructor() {}

  ngOnInit() {
    this.getTimePeriod();
  }

  getTimePeriod() {
    let curHr = new Date().getHours();

    if (curHr < 12) {
      this.timePeriod = "Good Morning";
    } else if (curHr < 18) {
      this.timePeriod = "Good Afternoon";
    } else {
      this.timePeriod = "Good Evening";
    }
  }
}
