import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngbd-dropdown',
  templateUrl: './ngbd-dropdown.component.html'
})
export class NgbdDropdownComponent {
    @Input() title: string;
    @Input() elements: string[];
}
