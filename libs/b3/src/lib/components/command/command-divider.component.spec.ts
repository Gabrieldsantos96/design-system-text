import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { B3CommandDividerComponent } from './command-divider.component';
import { B3CommandEmptyComponent } from './command-empty.component';
import { B3CommandInputComponent } from './command-input.component';
import { B3CommandListComponent } from './command-list.component';
import { B3CommandOptionGroupComponent } from './command-option-group.component';
import { B3CommandOptionComponent } from './command-option.component';
import { B3CommandComponent } from './command.component';

@Component({
  selector: 'test-host-component',
  standalone: true,
  imports: [
    B3CommandComponent,
    B3CommandInputComponent,
    B3CommandListComponent,
    B3CommandEmptyComponent,
    B3CommandOptionComponent,
    B3CommandOptionGroupComponent,
    B3CommandDividerComponent,
  ],
  template: `
    <b3-command>
      <b3-command-input placeholder="Search..."></b3command-input>
      <b3-command-list>
        <b3-command-empty>No results found.</b3-command-empty>
        <b3-command-option-group zLabel="Group 1">
          <b3-command-option zLabel="Option 1" zValue="opt1"></b3-command-option>
        </b3-command-option-group>

        <b3-command-divider class="test-divider"></b3-command-divider>

        <b3-command-option-group zLabel="Group 2">
          <b3-command-option zLabel="Option 2" zValue="opt2"></b3-command-option>
        </b3-command-option-group>
      </b3-command-list>
    </b3-command>
  `,
})
class TestHostComponent {}

@Component({
  selector: 'standalone-test',
  standalone: true,
  imports: [B3CommandDividerComponent],
  template: `<b3-command-divider class="standalone-divider"></b3-command-divider>`,
})
class StandaloneTestComponent {}

describe('B3CommandDividerComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: B3CommandDividerComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, StandaloneTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.debugElement.query(By.directive(B3CommandDividerComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show divider when no search term', () => {
    const dividerElement = fixture.nativeElement.querySelector('b3-command-divider div');
    expect(dividerElement).toBeTruthy();
    expect(dividerElement.getAttribute('role')).toBe('separator');
  });

  it('should hide divider during search', async () => {
    const input = fixture.nativeElement.querySelector('input');

    input.value = 'option';
    input.dispatchEvent(new Event('input'));

    // Wait for debounced search to complete
    await new Promise(resolve => setTimeout(resolve, 200));
    fixture.detectChanges();

    const dividerElement = fixture.nativeElement.querySelector('b3-command-divider div');
    expect(dividerElement).toBeFalsy();
  });

  it('should show divider when search is cleared', async () => {
    const input = fixture.nativeElement.querySelector('input');

    // Search first
    input.value = 'option';
    input.dispatchEvent(new Event('input'));

    // Wait for debounced search to complete
    await new Promise(resolve => setTimeout(resolve, 200));
    fixture.detectChanges();

    let dividerElement = fixture.nativeElement.querySelector('b3-command-divider div');
    expect(dividerElement).toBeFalsy();

    // Clear search
    input.value = '';
    input.dispatchEvent(new Event('input'));

    // Wait for debounced search to complete (immediate for empty values)
    await new Promise(resolve => setTimeout(resolve, 50));
    fixture.detectChanges();

    dividerElement = fixture.nativeElement.querySelector('b3-command-divider div');
    expect(dividerElement).toBeTruthy();
  });

  it('should work without command component context', () => {
    const standaloneFixture = TestBed.createComponent(StandaloneTestComponent);
    standaloneFixture.detectChanges();

    const dividerElement = standaloneFixture.nativeElement.querySelector('div');
    expect(dividerElement).toBeTruthy();
    expect(dividerElement.getAttribute('role')).toBe('separator');
  });

  it('should have correct CSS classes', () => {
    const dividerElement = fixture.nativeElement.querySelector('b3-command-divider div');
    expect(dividerElement.getAttribute('role')).toBe('separator');
    expect(dividerElement.className).toContain('-mx-1');
    expect(dividerElement.className).toContain('my-1');
    expect(dividerElement.className).toContain('h-px');
    expect(dividerElement.className).toContain('bg-border');
  });

  it('should support custom CSS classes', () => {
    const dividerElement = fixture.nativeElement.querySelector('b3-command-divider div');
    expect(dividerElement.className).toContain('test-divider');
  });

  it('should respond to search term changes reactively', async () => {
    const input = fixture.nativeElement.querySelector('input');

    // Multiple search changes
    const searchTerms = ['opt1', 'opt2', 'nonexistent', ''];

    for (const term of searchTerms) {
      input.value = term;
      input.dispatchEvent(new Event('input'));

      // Wait for debounced search to complete
      const delay = term === '' ? 50 : 200;
      await new Promise(resolve => setTimeout(resolve, delay));
      fixture.detectChanges();

      const dividerElement = fixture.nativeElement.querySelector('b3-command-divider div');
      if (term === '') {
        expect(dividerElement).toBeTruthy(); // Should show when no search
      } else {
        expect(dividerElement).toBeFalsy(); // Should hide during search
      }
    }
  });
});
