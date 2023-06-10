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
    {
      name: 'Password Manager clone',
      description: `<span class="spanHighlight">Password Manager</span> A user-friendly <span class="spanHighlight">ReactJS</span> web app for streamlined and secure <span class="spanHighlight">Password management</span>. Safely organize and encrypt your passwords in one place, ensuring convenience and peace of mind. `,
      type: 'Website',
      link: 'https://github.com/HemarajKS/finalEncrypted.git',
      image: '../../assets/images/works/Screenshot (753).png',
    },
    {
      name: 'Weather App clone',
      description: `<span class="spanHighlight">Weather App</span>, A <span class="spanHighlight">ReactJS</span>-based frontend application that provides real-time <span class="spanHighlight">Weather</span> updates. Access accurate forecasts and conveniently track essential weather information with its user-friendly interface. `,
      type: 'Website',
      link: 'https://github.com/HemarajKS/weatherApp.git',
      image: '../../assets/images/works/Screenshot (754).png',
    },
    {
      name: 'Foursquare clone',
      description: `<span class="spanHighlight">Foursquare</span>, a <span class="spanHighlight">ReactJS</span>-based frontend application. Discover nearby places, explore diverse categories, and seamlessly navigate using interactive maps. `,
      type: 'Website',
      link: 'https://github.com/HemarajKS/hotel.git',
      image: '../../assets/images/works/Screenshot (755).png',
    },
  ];
  getWorkItems(): WorkItem[] {
    return this.workItems;
  }
}
