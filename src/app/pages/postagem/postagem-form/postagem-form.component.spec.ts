import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemFormComponent } from './postagem-form.component';

describe('PostagemFormComponent', () => {
  let component: PostagemFormComponent;
  let fixture: ComponentFixture<PostagemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostagemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
