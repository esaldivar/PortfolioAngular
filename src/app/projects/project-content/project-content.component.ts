import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-content',
  imports: [CommonModule ],
  templateUrl: './project-content.component.html',
  styleUrl: './project-content.component.scss'
})
export class ProjectContentComponent implements OnInit{
  @Input({required:true}) listNumber: number = 0;
  projectOnLeft: boolean = false;

  ngOnInit(): void {
    console.log('ProjectContentComponent');
    this.listNumber % 2 === 0 ? this.projectOnLeft = true : this.projectOnLeft = false;
  }
}
