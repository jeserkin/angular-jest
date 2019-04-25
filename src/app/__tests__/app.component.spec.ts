import { async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { ConfigureFn, configureTests } from '@lib/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(
    async(() => {
      const configure: ConfigureFn = testBed => {
        testBed.configureTestingModule({
          declarations: [AppComponent],
          imports: [RouterTestingModule, NoopAnimationsModule],
          schemas: [NO_ERRORS_SCHEMA]
        })
          .compileComponents();
      };

      configureTests(configure).then(testBed => {
        fixture = testBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    })
  );

  it('should create the app', async(() => {
    expect(component).toBeDefined()
  }));

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it(`should have as title 'frontend'`, async(() => {
    expect(component.title).toEqual('frontend 1');
  }));

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to frontend 1!');
  }));
});
