import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningSweeper } from './mining-sweeper';

describe('MiningSweeper', () => {
  let component: MiningSweeper;
  let fixture: ComponentFixture<MiningSweeper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiningSweeper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiningSweeper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
