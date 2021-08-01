import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'microsoft-login';

  apiResponse: string = '';

  constructor(private msalservice: MsalService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.msalservice.instance.handleRedirectPromise().then(
      res => {
        if (res != null && res.account != null) {
          this.msalservice.instance.setActiveAccount(res.account)
        }
      }
    )
  }

  isLoggedIn(): boolean {
    return this.msalservice.instance.getActiveAccount() != null
  }

  login() {
    //Redirecting to Login Page

    this.msalservice.loginRedirect();

    // Using Popup

    // this.msalservice.loginPopup().subscribe((res:AuthenticationResult)=>{ 
    //   this.msalservice.instance.setActiveAccount(res.account)
    // }) 
  }

  logout() {
    this.msalservice.logout()
  }


  getProfile(){
    console.log("Hey")
    this.http.get("https://graph.microsoft.com/v1.0/me").subscribe((res) => {
      this.apiResponse = JSON.stringify(res);
    })
  }

  getMessages(){
    console.log("Hey")
    this.http.get("https://graph.microsoft.com/v1.0/me/messages").subscribe((res) => {
      this.apiResponse = JSON.stringify(res);
    })
  }


}
