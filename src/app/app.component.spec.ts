import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { routes } from './app-routing.module';
import { UsersService } from './shared/services/github/users.service';
import { Location } from '@angular/common';

describe('AppComponent', () => {

  let app: any;
  let fixture: any;
  let router: Router;
  let users: any;
  let location: Location;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), HttpClientModule, BrowserAnimationsModule],
      declarations: [AppComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    users = TestBed.inject(UsersService);

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  // it('navigate to / redirects you to /userlist', async () => {
  //   await router.navigate(['']);
  //   expect(location.path()).toBe('/userlist');
  // });


  // it('should create the app', () => {
  //   expect(app).toBeTruthy();
  // });


  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'github-api-users'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('github-api-users');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('github-api-users app is running!');
  // });
});
