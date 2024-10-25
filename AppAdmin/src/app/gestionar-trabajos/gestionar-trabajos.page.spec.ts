import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionarTrabajosPage } from './gestionar-trabajos.page';

describe('GestionarTrabajosPage', () => {
  let component: GestionarTrabajosPage;
  let fixture: ComponentFixture<GestionarTrabajosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarTrabajosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
