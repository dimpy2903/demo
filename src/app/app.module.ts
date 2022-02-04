import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { C11catComponent } from './c11cat/c11cat.component';
import { C12prodComponent } from './c12prod/c12prod.component';
import { C17dashboardComponent } from './c17dashboard/c17dashboard.component';
import { C18infoComponent } from './c17dashboard/c18info/c18info.component';
import { C19panelComponent } from './c17dashboard/c19panel/c19panel.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    C11catComponent,
    C12prodComponent,
    C17dashboardComponent,
    C18infoComponent,
    C19panelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GaugeModule.forRoot(),
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserModule,
    RouterModule.forRoot(
      [
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'home',component:HomeComponent},
        {path:'users',component:UsersComponent},
        {path:'products',component:ProductsComponent},
        {path:'db',component:C17dashboardComponent},
        {path:'categories',component:C11catComponent},
        {path:'prodInfo/:id',component:C12prodComponent},
        {path:'**',redirectTo:'db'}
      ]
    ),
    FormsModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
