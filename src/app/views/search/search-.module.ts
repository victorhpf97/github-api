
import { NgModule } from '@angular/core';
import { UsersService } from 'src/app/shared/services/github/users.service';
import { SearchRoutingModule } from './search-routing.module';
import { SearchUsersComponent } from './search-users/search-users.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
const APP_COMPONENT = [
    SearchUsersComponent
]

const APP_MODULES = [
    CommonModule,
    SearchRoutingModule

];

@NgModule({
    declarations: [
        APP_COMPONENT,
    ],
    imports: [
        // FormsModule,
        // ReactiveFormsModule,
        // CommonModule,
        // AdministracaoRoutingModule,
        
        APP_MODULES,
        // PRIMENG_MODULES,
        // DialogModule
    ],
    providers: [UsersService ]
})
export class SearchModule {
}
