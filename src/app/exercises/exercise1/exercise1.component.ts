import { Component } from "@angular/core";
import { ContentService } from "../../services/content.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-exercise1",
  templateUrl: "./exercise1.component.html",
  styleUrls: ["./exercise1.component.css"],
})
export class Exercise1Component {
  countries$ = this.contentService.getCountries();

  countryControl = new FormControl(null);

  constructor(private contentService: ContentService) {}
}
