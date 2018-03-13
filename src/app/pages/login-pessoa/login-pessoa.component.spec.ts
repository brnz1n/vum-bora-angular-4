import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPessoaComponent } from './login-pessoa.component';

describe('LoginPessoaComponent', () => {
  let component: LoginPessoaComponent;
  let fixture: ComponentFixture<LoginPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
