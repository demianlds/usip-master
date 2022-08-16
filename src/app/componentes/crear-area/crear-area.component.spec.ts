import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAreaComponent } from './crear-area.component';

describe('CrearServicioComponent', () => {
  let component: CrearAreaComponent;
  let fixture: ComponentFixture<CrearAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearAreaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
