import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-test-lib-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-lib-one.component.html',
  styleUrls: ['./test-lib-one.component.css'],
})
export class TestLibOneComponent {}
