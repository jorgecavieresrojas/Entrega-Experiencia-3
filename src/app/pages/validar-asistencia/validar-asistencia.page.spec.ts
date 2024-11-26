import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidarAsistenciaPage } from './validar-asistencia.page';

describe('ValidarAsistenciaPage', () => {
  let component: ValidarAsistenciaPage;
  let fixture: ComponentFixture<ValidarAsistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
