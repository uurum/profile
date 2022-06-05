import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-more',
  template: `<p>{{truncated}} <span (click)="updateText()">{{readMore ? 'MORE' : 'LESS'}}</span></p>`,
  styles: [`p {
    padding: 20px 0;
    font-size: 14px;
    color: #4d4d4d;
    max-width: 75%;
    line-height: 28px;
    max-height: 200px;
    overflow-y: auto;
}
span {
    color: rgb(72, 112, 223);
    cursor: pointer;
}`]
})
export class ReadMoreComponent implements OnInit {

  @Input() content!: string;
  truncated!: string;
  readMore = true;

  constructor() { }

  ngOnInit(): void {
    this.setContent();
  }

  setContent() {
    if (this.readMore) {
      if (this.content.length > 200) {
        this.truncated = this.content.substring(0, 200) + '...';
      }
    } else {
      this.truncated = this.content;
    }
  }

  updateText() {
    this.readMore = !this.readMore;
    this.setContent();
  }

}
