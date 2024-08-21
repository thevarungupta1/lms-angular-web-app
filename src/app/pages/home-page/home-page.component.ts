import { Component } from '@angular/core';
import { CoursesListComponent } from '../../components/courses-list/courses-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CoursesListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
