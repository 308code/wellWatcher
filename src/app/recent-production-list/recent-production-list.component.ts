import { Component, OnInit } from '@angular/core';
import {Well} from "../model/well.model";
import {WellService} from "../service/well.service";

@Component({
  selector: 'app-recent-production-list',
  templateUrl: './recent-production-list.component.html',
  styleUrls: ['./recent-production-list.component.css'],
  providers: [WellService]
})
export class RecentProductionListComponent implements OnInit {
  public wells: Well[] = [];
  constructor(private wellService: WellService){ }

  ngOnInit(): void {
    this.wells = this.wellService.getWells(new Date(),new Date());
  }
}