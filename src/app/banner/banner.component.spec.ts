import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Tooltip } from 'bootstrap';

const tooltipTriggerList: NodeListOf<HTMLElement> = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList: Tooltip[] = Array.from(tooltipTriggerList).map((tooltipTriggerEl: HTMLElement) => new Tooltip(tooltipTriggerEl));