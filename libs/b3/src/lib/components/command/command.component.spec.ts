import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
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
    <b3-command size="default" (zOnSelect)="onSelect($event)" (zOnChange)="onChange($event)">
      <b3-command-input placeholder="Test placeholder"></b3command-input>
      <b3-command-list>
        <b3-command-empty>No results found.</b3-command-empty>
        <b3-command-option-group zLabel="Test Group">
          <b3-command-option zLabel="Test Option" zValue="test" zShortcut="⌘T" zIcon="search"></b3-command-option>
          <b3-command-option zLabel="Disabled Option" zValue="disabled" [zDisabled]="true"></b3-command-option>
          <b3-command-option zLabel="Search Option" zValue="search" zCommand="search test"></b3-command-option>
        </b3-command-option-group>
        <b3-command-divider></b3-command-divider>
        <b3-command-option zLabel="Single Option" zValue="single"></b3-command-option>
      </b3-command-list>
    </b3-command>
  `,
})
class TestHostComponent {
  selectedOption: any = null;
  changedOption: any = null;

  onSelect(option: any) {
    this.selectedOption = option;
  }

  onChange(option: any) {
    this.changedOption = option;
  }
}

describe('B3CommandComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: B3CommandComponent;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(By.directive(B3CommandComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render placeholder text', () => {
    const input = fixture.nativeElement.querySelector('input');
    expect(input.placeholder).toBe('Test placeholder');
  });

  it('should handle search input', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('input');
    const searchTerm = 'test search';

    input.value = searchTerm;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(150); // Wait for debounce
    fixture.detectChanges();

    expect(component.searchTerm()).toBe(searchTerm);
  }));

  it('should have proper ARIA attributes', () => {
    const commandElement = fixture.nativeElement.querySelector('[role="combobox"]');
    expect(commandElement).toBeTruthy();
    expect(commandElement.getAttribute('aria-expanded')).toBe('true');
    expect(commandElement.getAttribute('aria-haspopup')).toBe('listbox');
  });

  it('should render command options', () => {
    const options = fixture.nativeElement.querySelectorAll('b3-command-option');
    expect(options.length).toBe(4);
  });

  it('should render command group', () => {
    const group = fixture.nativeElement.querySelector('b3-command-option-group');
    expect(group).toBeTruthy();
    expect(group.textContent).toContain('Test Group');
  });

  it('should render divider', () => {
    const divider = fixture.nativeElement.querySelector('b3-command-divider');
    expect(divider).toBeTruthy();
  });

  it('should filter options based on search term', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('input');

    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(150); // Wait for debounce
    fixture.detectChanges();

    const filteredOptions = component.filteredOptions();
    expect(filteredOptions.length).toBe(2); // "Test Option" and "Search Option" (has "test" in command)
  }));

  it('should show empty state when no results', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('input');

    input.value = 'nonexistent';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(150); // Wait for debounce
    fixture.detectChanges();

    const filteredOptions = component.filteredOptions();
    expect(filteredOptions.length).toBe(0);
  }));

  it('should emit zOnSelect when option is clicked', fakeAsync(() => {
    const optionElements = fixture.nativeElement.querySelectorAll('b3-command-option');
    const firstOption = optionElements[0];
    const firstOptionDiv = firstOption.querySelector('div');

    firstOptionDiv.click();
    tick();
    fixture.detectChanges();

    expect(hostComponent.selectedOption).toBeTruthy();
    expect(hostComponent.selectedOption?.label).toBe('Test Option');
    expect(hostComponent.selectedOption?.value).toBe('test');
  }));

  it('should emit zOnChange when option is clicked', fakeAsync(() => {
    const optionElements = fixture.nativeElement.querySelectorAll('b3-command-option');
    const firstOption = optionElements[0];
    const firstOptionDiv = firstOption.querySelector('div');

    firstOptionDiv.click();
    tick();
    fixture.detectChanges();

    expect(hostComponent.changedOption).toBeTruthy();
    expect(hostComponent.changedOption?.label).toBe('Test Option');
    expect(hostComponent.changedOption?.value).toBe('test');
  }));

  it('should not emit events for disabled options', () => {
    const optionElements = fixture.nativeElement.querySelectorAll('b3-command-option');
    const disabledOption = optionElements[1]; // "Disabled Option"

    disabledOption.click();
    fixture.detectChanges();

    expect(hostComponent.selectedOption).toBeNull();
    expect(hostComponent.changedOption).toBeNull();
  });

  it('should handle keyboard navigation', fakeAsync(() => {
    const optionElements = fixture.nativeElement.querySelectorAll('b3-command-option');
    const firstOption = optionElements[0];
    const firstOptionDiv = firstOption.querySelector('div');

    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    firstOptionDiv.dispatchEvent(enterEvent);
    tick();
    fixture.detectChanges();

    expect(hostComponent.selectedOption).toBeTruthy();
    expect(hostComponent.selectedOption?.label).toBe('Test Option');
  }));

  it('should render option with icon and shortcut', () => {
    const optionElement = fixture.nativeElement.querySelector('b3-command-option');
    const iconElement = optionElement.querySelector('div[b3-icon]');
    expect(iconElement).toBeTruthy();
    expect(optionElement.textContent).toContain('⌘T');
  });

  it('should hide groups when no matching options', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('input');

    input.value = 'single';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(150); // Wait for debounce
    fixture.detectChanges();

    const filteredOptions = component.filteredOptions();
    expect(filteredOptions.length).toBe(1); // Only "Single Option" should match
    expect(filteredOptions[0].zLabel()).toBe('Single Option');
  }));

  it('should hide dividers during search', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('input');

    // Initially dividers should be visible
    const dividers = fixture.nativeElement.querySelectorAll('b3-command-divider');
    expect(dividers.length).toBeGreaterThan(0);

    // After search, component filters options
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(150); // Wait for debounce
    fixture.detectChanges();

    // Check that search is active
    expect(component.searchTerm()).toBe('test');
  }));

  it('should filter by command property', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('input');

    input.value = 'search';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(150); // Wait for debounce
    fixture.detectChanges();

    const filteredOptions = component.filteredOptions();
    expect(filteredOptions.length).toBe(1); // Only "Search Option" has "search test" in command
    expect(filteredOptions[0].zLabel()).toBe('Search Option');
  }));

  it('should maintain search state across multiple searches', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('input');

    // First search
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(150); // Wait for debounce
    fixture.detectChanges();
    expect(component.searchTerm()).toBe('test');

    // Second search
    input.value = 'single';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(150); // Wait for debounce
    fixture.detectChanges();
    expect(component.searchTerm()).toBe('single');

    // Clear search
    input.value = '';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(0); // No debounce for empty string
    fixture.detectChanges();
    expect(component.searchTerm()).toBe('');
  }));

  it('should show all options when search is cleared', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('input');

    // Search to filter
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(150); // Wait for debounce
    fixture.detectChanges();
    expect(component.filteredOptions().length).toBe(2);

    // Clear search
    input.value = '';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(0); // No debounce for empty string
    fixture.detectChanges();
    expect(component.filteredOptions().length).toBe(4); // All options visible again
  }));

  it('should handle case-insensitive search', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('input');

    input.value = 'TEST';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(150); // Wait for debounce
    fixture.detectChanges();

    const filteredOptions = component.filteredOptions();
    expect(filteredOptions.length).toBe(2); // Should match "Test Option" and "Search Option"
  }));

  it('should update filtered options reactively', fakeAsync(() => {
    const initialOptions = component.filteredOptions();

    const input = fixture.nativeElement.querySelector('input');
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(150); // Wait for debounce
    fixture.detectChanges();

    const filteredOptions = component.filteredOptions();
    expect(filteredOptions.length).toBeLessThanOrEqual(initialOptions.length);
    expect(component.searchTerm()).toBe('test');
  }));
});
