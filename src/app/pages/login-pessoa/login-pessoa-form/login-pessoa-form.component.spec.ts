import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPessoaFormComponent } from './login-pessoa-form.component';

describe('LoginPessoaFormComponent', () => {
  let component: LoginPessoaFormComponent;
  let fixture: ComponentFixture<LoginPessoaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPessoaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPessoaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
