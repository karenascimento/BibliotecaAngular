import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoLivrosComponent } from './emprestimo-livros.component';

describe('EmprestimoLivrosComponent', () => {
  let component: EmprestimoLivrosComponent;
  let fixture: ComponentFixture<EmprestimoLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmprestimoLivrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimoLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
