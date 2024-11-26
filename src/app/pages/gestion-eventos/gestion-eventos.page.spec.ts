import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionEventosPage } from './gestion-eventos.page';

describe('GestionEventosPage', () => {
  let component: GestionEventosPage;
  let fixture: ComponentFixture<GestionEventosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
