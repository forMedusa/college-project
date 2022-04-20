import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueReqComponent } from './issue-req.component';

describe('IssueReqComponent', () => {
  let component: IssueReqComponent;
  let fixture: ComponentFixture<IssueReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
