import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTheMovementComponent } from './join-the-movement.component';

describe('JoinTheMovementComponent', () => {
  let component: JoinTheMovementComponent;
  let fixture: ComponentFixture<JoinTheMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinTheMovementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinTheMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
