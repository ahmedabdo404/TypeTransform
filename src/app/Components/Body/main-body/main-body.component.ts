import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/Models/Language';
import { ILanguagesData } from 'src/app/Models/LanguagesDataModel';
import { GetDataService } from 'src/app/Services/get-data.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {

  LanguagesData: any;
  ResultContent: string;
  IsCopyBtnShowed: Boolean;
  CurrentLang: Language;

  constructor(private dataService: GetDataService) {
    this.LanguagesData = {};
    this.ResultContent = "";
    this.IsCopyBtnShowed = false;
    this.CurrentLang = Language.en;
  }

  ngOnInit(): void {
    //call the api data from json using the service
    this.dataService.GetData().subscribe(
      data => {
        this.LanguagesData = data
      },
      err => console.log(err, "error"),
      () => console.log('Trying to retrive Data is Done')
    )
  }

  setFinalResult(TextValue: string): void {
    // console.log(sourceText.value)
    this.ResultContent = this.TranformText(TextValue);
    // this.ShowCopyBtn()
  }

  SetLang(Lang: string): void {
    this.CurrentLang = Lang == "en" ? Language.en : Language.ar
  }

  TranformText(text: string): string {
    let transformedString = "";
    if (text.length > 0) {
      for (let [char, index] of text) {
        // transform to arabic
        if (this.CurrentLang === Language.ar) {
          let enCharsIndex = this.LanguagesData.enChars.indexOf(char);
          let shiftEnCharsIndex = this.LanguagesData.shifEnChars.indexOf(char);
          if (enCharsIndex >= 0)
            transformedString += this.LanguagesData.arChars[enCharsIndex];
          else if (shiftEnCharsIndex >= 0)
            transformedString += this.LanguagesData.shifArChars[shiftEnCharsIndex];
          else
            transformedString += char;
        }
        // transform to english
        else {
          let arCharsIndex = this.LanguagesData.arChars.indexOf(char);
          let shiftArCharsIndex = this.LanguagesData.shifArChars.indexOf(char);
          if (arCharsIndex >= 0)
            transformedString += this.LanguagesData.enChars[arCharsIndex];
          else if (shiftArCharsIndex >= 0)
            transformedString += this.LanguagesData.shifEnChars[shiftArCharsIndex];
          else
            transformedString += char;
        }
      }

      // ↓↓ temp fix the "لا" issue by transform all gh into b;
      if (this.CurrentLang === Language.en) {
        transformedString = transformedString.replace(/gh/gm, "b")
      }
    }
    return transformedString;
  }

  CopyToClipboard(): void {
    // Copy the text inside the text field
    navigator.clipboard.writeText(this.ResultContent);
    this.ShowcopiedText()
  }

  ShowcopiedText(): void {
    this.IsCopyBtnShowed = true
    setTimeout(() => {
      this.IsCopyBtnShowed = false
    }, 2000)
  }
}


