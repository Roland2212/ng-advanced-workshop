import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "highlightValue",
})
export class HighlightValuePipe implements PipeTransform {
  transform(value: string, inputValue: string) {
    const highlightStartIndex = value
      .toLowerCase()
      .indexOf(inputValue.toLowerCase());
    const highlightEndIndex = highlightStartIndex + inputValue.length;
    if (highlightStartIndex < 0) return value;

    return `${value.substring(0, highlightStartIndex)}<b>${value.substring(
      highlightStartIndex,
      highlightEndIndex
    )}</b>${value.substring(highlightEndIndex, value.length)}`;
  }
}
