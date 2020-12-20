import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwowayPage } from './twoway.page';

describe('TwowayPage', () => {
  let component: TwowayPage;
  let fixture: ComponentFixture<TwowayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwowayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
