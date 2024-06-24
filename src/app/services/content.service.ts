import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Country, State } from "../interfaces/content.interface";

@Injectable({
  providedIn: "root",
})
export class ContentService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`http://localhost:3000/countries`);
  }

  getStates(countryId: string): Observable<State[]> {
    return this.http
      .get<State[]>(`http://localhost:3000/states?countryCode=${countryId}`)
      .pipe(
        map((states) => {
          return states.sort((a, b) =>
            a.description > b.description ? 1 : -1
          );
        })
      );
  }
}
