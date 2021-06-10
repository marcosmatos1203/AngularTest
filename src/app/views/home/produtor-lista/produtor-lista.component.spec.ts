import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorListaComponent } from './produtor-lista.component';

describe('ProdutorListaComponent', () => {
  let component: ProdutorListaComponent;
  let fixture: ComponentFixture<ProdutorListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutorListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
