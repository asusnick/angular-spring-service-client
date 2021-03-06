import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserInputTableComponent } from './components/user-input-table/user-input-table.component';
import { FormsModule } from '@angular/forms';
import {AddUserService} from './services/add-user.service';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [ FormsModule, HttpModule ],
      declarations: [
        AppComponent,
        UserInputTableComponent,
      ],
      providers:[AddUserService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app');
  }));
});
