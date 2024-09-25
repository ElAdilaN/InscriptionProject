import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscriptionComponent } from '../Components/User/inscription/inscription.component';

let component: InscriptionComponent;
let fixture: ComponentFixture<InscriptionComponent>;
let compiled: HTMLElement;

function getNthLabel(index: number) {
  return compiled.querySelectorAll('label')[index];
}
function getHeads(index: number) {
  return compiled.querySelectorAll('h1')[index];
}

function getInputFromLabel(labelIndex: number) {
  return getNthLabel(labelIndex)!.querySelector('input');
}

describe('InscriptionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Dades identificatives ', () => {
  let component: InscriptionComponent;
  let fixture: ComponentFixture<InscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(InscriptionComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('check heads titles ', () => {
    expect(getHeads(0)!.textContent).toBe('Inscripció proves atletisme');
    expect(getHeads(1)!.textContent).toBe('Dades identificatives');
    expect(getHeads(2)!.textContent).toBe('Inscripció');
  });

  it('should have a title', () => {
    expect(getInputFromLabel(0)!.type).toBe('text');
  });

  it('check labels of dades identificatives', () => {
    expect(getNthLabel(0).textContent).toBe('DNI: ');
    expect(getNthLabel(1).textContent).toBe('Codi de federat: ');
    expect(getNthLabel(2).textContent).toBe('Nom i cognoms: ');
    expect(getNthLabel(3).textContent).toBe('Telèfon: ');
    expect(getNthLabel(4).textContent).toBe('Email: ');
  });

  it('check for inputs of dades identificatives', () => {
    expect(getInputFromLabel(0)!.type).toBe('text');
    expect(getInputFromLabel(1)!.type).toBe('text');
    expect(getInputFromLabel(2)!.type).toBe('text');
    expect(getInputFromLabel(3)!.type).toBe('text');
    expect(getInputFromLabel(4)!.type).toBe('email');
  });

  it('should show the letter', () => {
    const inputDni: HTMLInputElement = getInputFromLabel(0)!;
    inputDni.value = '1234567890';
    fixture.detectChanges();
    expect(compiled.querySelectorAll('p')[0]!.textContent).toBe('J');
  });
});
