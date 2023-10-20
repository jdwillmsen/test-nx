import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TestLibOneComponent } from '@org/test-lib-one';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, TestLibOneComponent],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
}
