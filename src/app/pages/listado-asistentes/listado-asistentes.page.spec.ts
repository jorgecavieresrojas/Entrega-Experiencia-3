import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoAsistentesPage } from './listado-asistentes.page';

describe('ListadoAsistentesPage', () => {
  let component: ListadoAsistentesPage;
  let fixture: ComponentFixture<ListadoAsistentesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAsistentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
