import { Injectable } from '@angular/core';
import { WorkItem } from '../interfaces/interfaces.module';

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  private workItems: WorkItem[] = [
    {
      name: 'Virtual Learn',
      description: `<span class="spanHighlight">Virtual Learn</span>, A user-friendly e-learning app built with <span class="spanHighlight">ReactJS</span>, offering an immersive online education experience with interactive content and engaging features.`,
      type: 'Website',
      link: 'https://github.com/Snehal0301/virtual-learn_user.git',
      image: '../../assets/images/works/virtualLearn.png',
    },
  ];
  getWorkItems(): WorkItem[] {
    return this.workItems;
  }
}
