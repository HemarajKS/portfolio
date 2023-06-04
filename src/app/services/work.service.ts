import { Injectable } from '@angular/core';
import { WorkItem } from '../interfaces/interfaces.module';

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  private workItems: WorkItem[] = [
    {
      name: 'Virtual Learn',
      description: `<span>Virtual Learn</span>, A user-friendly e-learning app built with <span>ReactJS</span>, offering an immersive online education experience with interactive content and engaging features.`,
      type: 'Website',
      link: 'https://www.google.com',
      image: '../../assets/images/works/virtualLearn.png',
    },
    {
      name: 'Virtual Learn',
      description: `<span>Virtual Learn</span>, A user-friendly e-learning app built with <span>ReactJS</span>, offering an immersive online education experience with interactive content and engaging features.`,
      type: 'Website',
      link: 'https://www.google.com',
      image: '../../assets/images/works/virtualLearn.png',
    },
  ];
  getWorkItems(): WorkItem[] {
    return this.workItems;
  }
}
