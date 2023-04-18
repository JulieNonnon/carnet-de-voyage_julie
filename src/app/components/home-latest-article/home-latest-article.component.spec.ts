import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLatestArticleComponent } from './home-latest-article.component';

describe('HomeLatestArticleComponent', () => {
  let component: HomeLatestArticleComponent;
  let fixture: ComponentFixture<HomeLatestArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLatestArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLatestArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
