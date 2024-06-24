import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable, combineLatestWith, map, startWith } from "rxjs";
import { Description } from "../../interfaces/content.interface";

@Component({
  selector: "app-filter-dropdown",
  templateUrl: "./filter-dropdown.component.html",
  styleUrls: ["./filter-dropdown.component.css"],
})
export class FilterDropdownComponent<T extends Description> implements OnInit {
  @Input() control!: FormControl;
  @Input() items$!: Observable<T[]>;
  @Input() placeholder: string = "";
  @Output() onSelectEvent$ = new EventEmitter<T>();

  filteredItems$: Observable<T[]>;

  ngOnInit(): void {
    this._getFilteredItems();
  }

  onSelectOption(item: T): void {
    this.onSelectEvent$.emit(item);
  }

  private _getFilteredItems(): void {
    this.filteredItems$ = this.control.valueChanges.pipe(
      startWith(""),
      combineLatestWith(this.items$),
      map(([value, items]) => this._filterByDescription(items, value))
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
