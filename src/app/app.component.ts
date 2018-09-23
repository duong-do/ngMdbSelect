import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngMdbSelect';

  public selectedValue: string;
  public dateOptionsSelect: any[];

  ngOnInit() {
    this.dateOptionsSelect = [
      { value: '1', label: 'Today'},
      { value: '2', label: 'Yesterday' },
      { value: '3', label: 'Last 7 days' },
      { value: '4', label: 'Last 30 days' },
      { value: '5', label: 'Last week' },
      { value: '6', label: 'Last month' }
      ];
      this.selectedValue = '1';
  }

  getSelectedValue(event: any) {
    console.log('Selected value');
    console.log(event);
  }
}
