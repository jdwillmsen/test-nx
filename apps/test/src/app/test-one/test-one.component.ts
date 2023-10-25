import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-test-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.scss'],
})
export class TestOneComponent {}
