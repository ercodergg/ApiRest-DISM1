import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionarFichajesPage } from './gestionar-fichajes.page';

describe('GestionarFichajesPage', () => {
  let component: GestionarFichajesPage;
  let fixture: ComponentFixture<GestionarFichajesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarFichajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
