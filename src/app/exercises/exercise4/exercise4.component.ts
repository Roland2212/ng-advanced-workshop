import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { FormControl } from "@angular/forms";
import { combineLatestWith, map, startWith } from "rxjs/operators";
import { ContentService } from "../../services/content.service";
import { HighlightValuePipe } from "../../pipes/highlight-value.pipe";
import { Country, State } from "../../interfaces/content.interface";

@Component({
  selector: "app-exercise4",
  templateUrl: "./exercise4.component.html",
  styleUrls: ["./exercise4.component.css"],
  providers: [HighlightValuePipe],
})
export class Exercise4Component {
  countries$!: Observable<Country[]>;
  states$!: Observable<State[]>;

  countryControl = new FormControl("");
  stateControl = new FormControl("");

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this._getFilteredCountries();
  }

  onSelectCountry(country: Country): void {
    const { id, description } = country;
    this.countryControl.setValue(description);
    this._getFilteredStates(id);
  }

  onSelectState(state: State): void {
    this.stateControl.setValue(state.description);
  }

  private _getFilteredCountries(): void {
    this.countries$ = this.countryControl.valueChanges.pipe(
      startWith(""),
      combineLatestWith(this.contentService.getCountries()),
      map(([value, countries]) => this._filterByDescription(countries, value))
    );
  }

  private _getFilteredStates(countryId: string): void {
    this.states$ = this.stateControl.valueChanges.pipe(
      startWith(""),
      combineLatestWith(this.contentService.getStates(countryId)),
      map(([value, states]) => this._filterByDescription(states, value))
    );
  }

  private _filterByDescription<T extends { description: string }>(
    items: T[],
    filterValue: string
  ): T[] {
    return items.filter((item) => {
      return item.description.toLowerCase().includes(filterValue.toLowerCase());
    });
  }
}
