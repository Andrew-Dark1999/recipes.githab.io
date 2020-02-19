import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';
import { FormsModule } from '@angular/forms';


import { StarRatingModule } from 'angular-star-rating';











@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ shoppingList: shoppingListReducer }),
    SharedModule,
    CoreModule,
    FormsModule,
    StarRatingModule
   
    
      


  ],

  bootstrap: [AppComponent],
  // providers: [ LoggingService],

})
export class AppModule { }
