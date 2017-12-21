import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {AddUserService} from '../../services/add-user.service';
import { HttpModule } from '@angular/http';

import { UserInputTableComponent } from './user-input-table.component';

describe('UserInputTableComponent', () => {
  let component: UserInputTableComponent;
  let fixture: ComponentFixture<UserInputTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
        HttpModule ],
      declarations: [
        UserInputTableComponent ],
      providers:[AddUserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
