import { Component } from '@angular/core';
import { WorkItem } from '../interfaces/interfaces.module';
import { WorkService } from '../services/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  workItems: WorkItem[] = [];
  constructor(private workService: WorkService) {}

  ngOnInit() {
    this.workItems = this.workService.getWorkItems();
    console.log(this.workItems);
  }
}
