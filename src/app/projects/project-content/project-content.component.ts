import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../utils/config';

@Component({
  selector: 'app-project-content',
  imports: [CommonModule ],
  templateUrl: './project-content.component.html',
  styleUrl: './project-content.component.scss'
})
export class ProjectContentComponent implements OnInit{
  @Input({required:true}) listNumber: number = 0;
  @Input({required:true}) project: Project = {
    title: '',
    description: '',
    techStack: [],
    github: '',
    imageUrl: ''
  };
  projectOnLeft: boolean = false;

  ngOnInit(): void {
    console.log('ProjectContentComponent');
    this.listNumber % 2 === 0 ? this.projectOnLeft = true : this.projectOnLeft = false;
  }
}
