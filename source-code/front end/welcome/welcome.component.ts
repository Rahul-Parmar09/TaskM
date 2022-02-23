import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  welcomeMessageFromService!: String;
  name = ''

  // ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessageWithParameter() {
    // console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response.message),
      error => this.handleErrorResponse(error)
    );

    // console.log('last line of getWelcomeMessage')

    // console.log("get welcome message")
  }

  handleSuccessfulResponse(response: String) {
    this.welcomeMessageFromService = response
    // console.log(response);
  }

  handleErrorResponse(error: { error: { message: String; }; }) {

    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);

    this.welcomeMessageFromService = error.error.message
  }

}
