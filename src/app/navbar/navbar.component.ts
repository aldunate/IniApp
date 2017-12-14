import { Component, OnInit, Input } from '@angular/core';
import { TokenService } from '../usuario/service/token.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logueado: boolean;

  constructor(private tokenService: TokenService) {
    tokenService.onLoguin.subscribe((value) => {
      this.logueado = value;
      this.changeUserStatus();
    });
  }

  changeUserStatus() {
    if (this.logueado) {
        
    }else {

    }
  }

  logout() {
    this.tokenService.remove();
  }
  ngOnInit() { }


}




