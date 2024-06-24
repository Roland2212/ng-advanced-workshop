import { Component, HostListener, Input } from "@angular/core";
import { Observable, finalize } from "rxjs";
import { ButtonState } from "../../interfaces/content.interface";

@Component({
  selector: "app-loading-state-button",
  templateUrl: "./loading-state-button.component.html",
  styleUrls: ["./loading-state-button.component.css"],
})
export class LoadingStateButtonComponent<T> {
  @Input() state$!: Observable<T>;

  state: ButtonState = "start";

  @HostListener("click") onClick(): void {
    this.state = "loading";
    this.state$
      .pipe(
        finalize(() => {
          this.state = "finished";
        })
      )
      .subscribe();
  }
}
