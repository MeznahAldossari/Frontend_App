import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovemessageComponent } from './removemessage.component';

describe('RemovemessageComponent', () => {
  let component: RemovemessageComponent;
  let fixture: ComponentFixture<RemovemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovemessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
