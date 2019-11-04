import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirFilmesComponent } from './inserir-filmes.component';

describe('InserirFilmesComponent', () => {
  let component: InserirFilmesComponent;
  let fixture: ComponentFixture<InserirFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirFilmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
