import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";
import { Observable, finalize } from "rxjs";

@Directive({
  selector: "[appLoadingState]",
})
export class LoadingStateDirective<T> implements OnInit {
  @Input() startText = "[START]";
  @Input() loadingText = "[LOADING]";
  @Input() finishText = "[LOADED]";

  @Input() state$!: Observable<T>;

  @HostListener("click") onClick(): void {
    this.element.nativeElement.innerText = this.loadingText;
    this.state$
      .pipe(
        finalize(() => {
          this.element.nativeElement.innerText = this.finishText;
        })
      )
      .subscribe();
  }

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.innerText = this.startText;
  }
}
