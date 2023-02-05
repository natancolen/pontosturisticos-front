import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontosturisticosFormComponent } from './pontosturisticos-form.component';

describe('PontosturisticosFormComponent', () => {
  let component: PontosturisticosFormComponent;
  let fixture: ComponentFixture<PontosturisticosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontosturisticosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontosturisticosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
