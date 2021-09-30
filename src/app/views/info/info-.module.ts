
import { NgModule } from '@angular/core';
import { InfoRoutingModule } from './info-routing.module';
import { InfoUserComponent } from './info-user/info-user.component';
// import { SearchRoutingModule } from './search-routing.module';
import { UsersService } from 'src/app/shared/services/github/users.service';


const APP_COMPONENT = [
    // SearchUsersComponent
]

const APP_MODULES = [
    //         

];

@NgModule({
    declarations: [
        // APP_COMPONENT,
    InfoUserComponent],
    imports: [
        // FormsModule,
        // ReactiveFormsModule,
        // CommonModule,
        // AdministracaoRoutingModule,
        InfoRoutingModule
        // APP_MODULES,
        // PRIMENG_MODULES,
        // DialogModule
    ],
    providers: [UsersService]
})
export class InfoModule {
}
