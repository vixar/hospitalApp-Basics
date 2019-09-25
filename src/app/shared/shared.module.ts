import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    NotpagefoundComponent,
    SidebarComponent
  ],

  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    NotpagefoundComponent,
    SidebarComponent
  ]
})

export class SharedModule { }
