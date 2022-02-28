import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portofolio';
  constructor(public translate:TranslateService) {
    translate.addLangs(['fr', 'en'])
    translate.setDefaultLang('fr')
  }

  switchLanguage(lang: string){
    this.translate.use(lang);
  }
}
