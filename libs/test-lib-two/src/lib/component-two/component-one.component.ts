import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-component-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
})
export class ComponentOneComponent {}
