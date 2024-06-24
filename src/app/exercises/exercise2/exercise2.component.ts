import { AfterViewInit, Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ContentService } from "../../services/content.service";
import { Observable, switchMap } from "rxjs";
import { State } from "../../interfaces/content.interface";

@Component({
  selector: "app-exercise2",
  templateUrl: "./exercise2.component.html",
  styleUrls: ["./exercise2.component.css"],
})
export class Exercise2Component implements AfterViewInit {
  countries$ = this.contentService.getCountries();
  states$!: Observable<State[]>;

  countryControl = new FormControl(null);
  stateControl = new FormControl(null);

  constructor(private contentService: ContentService) {}

  ngAfterViewInit(): void {
    this._getStates();
  }

  private _getStates(): void {
    this.states$ = this.countryControl.valueChanges.pipe(
      switchMap((countryId) => this.contentService.getStates(countryId))
    );
  }
}
