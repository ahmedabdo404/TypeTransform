import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {

  GetDate: number;
  // FooterPosition: object;
  // @ViewChild('footer') FooterTempVar: any;

  constructor() {
    this.GetDate = new Date().getFullYear();
    // this.FooterPosition = {};
  }

  ngAfterViewInit(): void {
    // let scrollHeight = document.activeElement!.scrollHeight
    // let innerHeight = window.innerHeight
    // if (scrollHeight > innerHeight) {
    //   this.FooterPosition = { position: "relative" }
    // } else {
    //   this.FooterPosition = { position: "absolute" }
    // }
  }
}
