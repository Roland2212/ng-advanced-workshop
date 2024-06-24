import { Component, OnInit } from "@angular/core";
import { ContentService } from "../../services/content.service";
import { FormControl } from "@angular/forms";
import { Observable, combineLatestWith, map, startWith } from "rxjs";
import { Country, State } from "../../interfaces/content.interface";
import { HighlightValuePipe } from "../../pipes/highlight-value.pipe";

@Component({
  selector: "app-exercise3",
  templateUrl: "./exercise3.component.html",
  styleUrls: ["./exercise3.component.css"],
  providers: [HighlightValuePipe],
})
export class Exercise3Component implements OnInit {
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
    this.states$ = this.contentService.getStates(id);
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

  private _filterByDescription<T extends { description: string }>(
    items: T[],
    filterValue: string
  ): T[] {
    return items.filter((item) => {
      return item.description.toLowerCase().includes(filterValue.toLowerCase());
    });
  }
}
