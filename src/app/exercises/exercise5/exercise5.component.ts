import { Component } from "@angular/core";
import { Observable, Subject, tap } from "rxjs";
import { FormControl } from "@angular/forms";
import { ContentService } from "../../services/content.service";
import { Country, State } from "../../interfaces/content.interface";

@Component({
  selector: "app-exercise5",
  templateUrl: "./exercise5.component.html",
  styleUrls: ["./exercise5.component.css"],
})
export class Exercise5Component {
  countries$: Observable<Country[]> = this.contentService.getCountries();

  private _statesSubject$ = new Subject<State[]>();

  countryControl = new FormControl("");
  stateControl = new FormControl("");

  currentCountry!: Country;
  currentState!: State;

  get states$(): Observable<State[]> {
    return this._statesSubject$.asObservable();
  }

  constructor(private contentService: ContentService) {}

  onSelectCountry(country: Country): void {
    const { id, description } = country;
    this.currentCountry = country;
    this.countryControl.setValue(description);
    this._getStatesByCountryId(id);
  }

  onSelectState(state: State): void {
    this.currentState = state;
    this.stateControl.setValue(state.description);
  }

  private _getStatesByCountryId(countryId: string): void {
    this.contentService
      .getStates(countryId)
      .pipe(
        tap((states) => {
          this._statesSubject$.next(states);
        })
      )
      .subscribe();
  }
}
