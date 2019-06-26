import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PeopleComponent } from "./people/people.component";
import { ProductsComponent } from "./products/products.component";
import { MaterialModule } from "../material.module";
import { BrowserModule } from "@angular/platform-browser";
import { MainRoutingModule } from "./main-routing.module";

@NgModule({
  declarations: [PeopleComponent, ProductsComponent],
  imports: [CommonModule, MaterialModule, MainRoutingModule]
})
export class MainModule {}
