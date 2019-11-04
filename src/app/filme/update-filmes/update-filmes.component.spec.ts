import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFilmesComponent } from './update-filmes.component';

describe('UpdateFilmesComponent', () => {
  let component: UpdateFilmesComponent;
  let fixture: ComponentFixture<UpdateFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFilmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
