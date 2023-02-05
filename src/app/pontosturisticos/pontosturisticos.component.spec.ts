import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontosturisticosComponent } from './pontosturisticos.component';

describe('PontosturisticosComponent', () => {
  let component: PontosturisticosComponent;
  let fixture: ComponentFixture<PontosturisticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontosturisticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontosturisticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
