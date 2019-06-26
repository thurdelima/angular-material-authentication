import { Component } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { Observable } from "rxjs";
import { User } from "./auth/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "loginapp";
  authenticated$: Observable<boolean>;
  user$: Observable<User>;

  constructor(private authService: AuthService, private router: Router) {
    this.authenticated$ = this.authService.isAuthenticated();
    this.user$ = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/auth/login");
  }
}
