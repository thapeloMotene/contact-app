import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatListModule} from '@angular/material/list';
import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactListComponent ],
      imports:[MatListModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should render without breaking', () => {
    expect(component).toBeTruthy();
  });

  it('should render empty state', () => {
    const fixture = TestBed.createComponent(ContactListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#empty-state').textContent).toContain('no contacts to display!');
  });


  it('should render list item', () => {
    const fixture = TestBed.createComponent(ContactListComponent);
    fixture.componentInstance.contactList =[{id:1, name:'Thapelo', surname:'Motene',relationship:'Me', phone:'0762906973'}];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-contact-item')).toBeTruthy();
  });

});