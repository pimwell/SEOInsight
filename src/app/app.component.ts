import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  paragraph = "some content";
  tasks = ['click that link', 'click that link right now!', 'if you care!!!']
}
