import { ConfigureFn, configureTests } from '@lib/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MasterComponent } from '../master.component';
import { ComponentFixture } from '@angular/core/testing';

describe('MasterComponent', () => {
  let fixture: ComponentFixture<MasterComponent>;
  let component: MasterComponent;

  beforeEach(() => {
    const configure: ConfigureFn = testBed => {
      testBed.configureTestingModule({
        declarations: [MasterComponent],
        imports: [RouterTestingModule, NoopAnimationsModule],
        schemas: [NO_ERRORS_SCHEMA]
      });
    };

    configureTests(configure).then(testBed => {
      fixture = testBed.createComponent(MasterComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular with Jest sauce');
  });
});
