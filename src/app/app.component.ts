import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "Madz";

  constructor() {
    this.changeName("Jon");
  }

  changeName(name: string): void {
    this.name = name;
  }
}
