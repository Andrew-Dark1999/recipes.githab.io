import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';
import { Title } from '@angular/platform-browser';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private loggingService: LoggingService,
    private title: Title,
  ) {
    this.title.setTitle('Recipe Book')
   }

  ngOnInit() {
    this.authService.autoLogin();
    this.loggingService.printLog('Hello fr APP ngInit');
  }


}


