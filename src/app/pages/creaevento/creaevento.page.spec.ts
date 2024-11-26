import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreaeventoPage } from './creaevento.page';

describe('CreaeventoPage', () => {
  let component: CreaeventoPage;
  let fixture: ComponentFixture<CreaeventoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaeventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
