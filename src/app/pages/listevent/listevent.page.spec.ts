import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeventPage } from './listevent.page';

describe('ListeventPage', () => {
  let component: ListeventPage;
  let fixture: ComponentFixture<ListeventPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
