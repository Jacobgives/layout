import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayouMainComponent } from './layou-main.component';

describe('LayouMainComponent', () => {
  let component: LayouMainComponent;
  let fixture: ComponentFixture<LayouMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayouMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayouMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
