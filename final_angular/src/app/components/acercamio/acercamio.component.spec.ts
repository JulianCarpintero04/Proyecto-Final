import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercamioComponent } from './acercamio.component';

describe('AcercamioComponent', () => {
  let component: AcercamioComponent;
  let fixture: ComponentFixture<AcercamioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercamioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercamioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
