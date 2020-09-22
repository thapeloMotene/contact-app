import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactItemComponent } from './contact-item.component';

describe('ContactItemComponent', () => {
  let component: ContactItemComponent;
  let fixture: ComponentFixture<ContactItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactItemComponent);
    component = fixture.componentInstance;
    component.contact={id:1, name:'Thapelo', surname:'Motene',relationship:'Me', phone:'0762906973'};
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
