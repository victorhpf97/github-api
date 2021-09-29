import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';



// const APP_MODULES = [
//     // LayoutModule,
//     // ComponentsModule
// ];



@NgModule({
    declarations: [
        ViewsComponent
    ],
    imports: [
        CommonModule,
        ViewsRoutingModule,
        RouterModule,
        
        // APP_MODULES,
        // PRIMENG_MODULES
    ],
    providers: [],
    bootstrap: [ViewsComponent]
})
export class ViewsModule {
}
