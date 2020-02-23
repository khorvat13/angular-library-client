import {Component, OnInit} from '@angular/core';
import {APP_SIDEBAR, SidebarItem} from '../../config/app-sidebar';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  menuItems: SidebarItem[] = APP_SIDEBAR;
  isCollapsed: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
