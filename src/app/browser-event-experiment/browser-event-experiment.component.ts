import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiment',
  templateUrl: './browser-event-experiment.component.html',
  styleUrls: ['./browser-event-experiment.component.css']
})
export class BrowserEventExperimentComponent implements OnInit {
  hoverElement: HTMLElement;

  constructor() {}

  ngOnInit() {
    this.hoverElement = document.getElementById('hover');
    this.hoverElement.addEventListener('mousemove', moverMouse);
  }
  unsuscribe() {
    console.log('llamado');
    this.hoverElement.removeEventListener('mousemove', moverMouse);
  }
}
function moverMouse(ev: MouseEvent) {
  console.log(ev);
}
