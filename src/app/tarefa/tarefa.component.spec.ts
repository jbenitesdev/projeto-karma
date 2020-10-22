import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TarefaService } from '../service/tarefa.serive';

import { TarefaComponent } from './tarefa.component';

describe('TarefaComponent', () => {
  let component: TarefaComponent;
  let fixture: ComponentFixture<TarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TarefaComponent],
      providers: [TarefaService],
      imports: [
        FormsModule,
        HttpClientModule,
        BrowserModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('criar component Tarefa', () => {
    expect(component).toBeTruthy();
  });

  it(`Verificar label tag`, () => {
    fixture = TestBed.createComponent(TarefaComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('label').textContent).toContain('Titulo da Tarefa');
  });

  it(`Verificar h1 tag `, () => {
    fixture = TestBed.createComponent(TarefaComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Bem vindo ao sistema');

  });
});
