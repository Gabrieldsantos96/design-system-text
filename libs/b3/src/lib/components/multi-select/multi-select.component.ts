import { Component, ViewChild, input, computed, forwardRef, ChangeDetectionStrategy, ViewEncapsulation, EventEmitter } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MultiSelect } from 'primeng/multiselect';
import type { ClassValue } from 'clsx';
import { Subject } from 'rxjs';

import { variants, type B3MultiSelectVariants } from './multi-select.variants';
import { mergeClasses } from '../../shared/utils/utils';


type CompareWithFn = (a: string, b: string) => boolean;

type MatchExpressionMode = 'contains' | 'startsWith' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte';

@Component({
  selector: 'b3-multi-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, MultiSelect],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B3MultiSelectComponent),
      multi: true,
    },
  ],
  template: `
    <p-multiSelect
      #selectEl
      [id]="id()"
      [class]="classes()"
      [ariaLabel]="ariaLabel()"
      [panelStyleClass]="panelStyleClass()"
      [inputId]="inputId()"
      [readonly]="readonly()"
      [group]="group()"
      [filter]="filter()"
      [filterPlaceHolder]="filterPlaceHolder()"
      [filterLocale]="filterLocale()"
      [overlayVisible]="overlayVisible()"
      [tabindex]="tabindex()"
      [dataKey]="dataKey()"
      [ariaLabelledBy]="ariaLabelledBy()"
      [displaySelectedLabel]="displaySelectedLabel()"
      [maxSelectedLabels]="maxSelectedLabels()"
      [selectionLimit]="selectionLimit()"
      [selectedItemsLabel]="selectedItemsLabel()"
      [showToggleAll]="showToggleAll()"
      [emptyFilterMessage]="emptyFilterMessage()"
      [emptyMessage]="emptyMessage()"
      [resetFilterOnHide]="resetFilterOnHide()"
      [dropdownIcon]="dropdownIcon()"
      [chipIcon]="chipIcon()"
      [optionLabel]="optionLabel()"
      [optionValue]="optionValue()"
      [optionDisabled]="optionDisabled()"
      [optionGroupLabel]="optionGroupLabel()"
      [optionGroupChildren]="optionGroupChildren()"
      [showHeader]="showHeader()"
      [filterBy]="filterBy()"
      [scrollHeight]="scrollHeight()"
      [lazy]="lazy()"
      [virtualScroll]="virtualScroll()"
      [loading]="loading()"
      [virtualScrollItemSize]="virtualScrollItemSize()"
      [loadingIcon]="loadingIcon()"
      [virtualScrollOptions]="virtualScrollOptions()"
      [overlayOptions]="{ appendTo: appendTo() || 'body' }"
      [ariaFilterLabel]="ariaFilterLabel()"
      [filterMatchMode]="filterMatchMode()"
      [tooltip]="tooltip()"
      [tooltipPosition]="tooltipPosition()"
      [tooltipPositionStyle]="tooltipPositionStyle()"
      [tooltipStyleClass]="tooltipStyleClass()"
      [autofocusFilter]="autofocusFilter()"
      [display]="display()"
      [autocomplete]="autocomplete()"
      [showClear]="showClear()"
      [autofocus]="autofocus()"
      [placeholder]="placeholder()"
      [options]="options()"
      [filterValue]="filterValue()"
      [selectAll]="selectAll()"
      [focusOnHover]="focusOnHover()"
      [filterFields]="filterFields()"
      [selectOnFocus]="selectOnFocus()"
      [autoOptionFocus]="autoOptionFocus()"
      [highlightOnSelect]="highlightOnSelect()"
      [size]="size()"
      [variant]="variant()"
      [fluid]="fluid()"
      [appendTo]="appendTo()"
      [ngModel]="value"
      (ngModelChange)="onChange?.($event); onTouched?.()"
      (onBlur)="onTouched?.()"
      (onFilter)="onFilter.emit($event); typeahead().next($event.filter)"
      (onChange)="onChangeEvent.emit($event)"
      (onFocus)="onFocus.emit($event)"
      (onClick)="onClick.emit($event)"
      (onClear)="onClear.emit()"
      (onPanelShow)="onPanelShow.emit($event)"
      (onPanelHide)="onPanelHide.emit($event)"
      (onLazyLoad)="onLazyLoad.emit($event)"
      (onRemove)="onRemove.emit($event)"
      (onSelectAllChange)="onSelectAllChange.emit($event)"
    >
      <ng-template pTemplate="selectedItems" let-selectedItems>
        <div class="flex flex-wrap gap-1">
          @for (item of selectedItems; track item[optionValue()]) {
            <span class="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
              {{ item.label }}
              <button type="button" (click)="remove(item)" class="ml-1">x</button>
            </span>
          }
        </div>
      </ng-template>
    </p-multiSelect>
  `,
})
export class B3MultiSelectComponent {
  @ViewChild('selectEl', { static: true }) selectRef!: MultiSelect;

  zLabel = input<string>();
  zSize = input<B3MultiSelectVariants['zSize']>('default');
  zStatus = input<B3MultiSelectVariants['zStatus']>();
  zBorderless = input<B3MultiSelectVariants['zBorderless']>(false);
  class = input<ClassValue>('');
  id = input<string>();
  ariaLabel = input<string>();
  panelStyleClass = input<string>();
  inputId = input<string>();
  readonly = input<boolean>();
  group = input<boolean>();
  filter = input<boolean>(true);
  filterPlaceHolder = input<string>();
  filterLocale = input<string>();
  overlayVisible = input<boolean>();
  tabindex = input<number>();
  dataKey = input<string>();
  ariaLabelledBy = input<string>();
  displaySelectedLabel = input<boolean>(true);
  maxSelectedLabels = input<number | null>(3);
  selectionLimit = input<number>();
  selectedItemsLabel = input<string>();
  showToggleAll = input<boolean>(true);
  emptyFilterMessage = input<string>('Nenhum item encontrado');
  emptyMessage = input<string>('Nenhum item encontrado');
  resetFilterOnHide = input<boolean>(false);
  dropdownIcon = input<string>();
  chipIcon = input<string>();
  optionLabel = input<string>('label');
  optionValue = input<string>('');
  optionDisabled = input<string>();
  optionGroupLabel = input<string>();
  optionGroupChildren = input<string>('children');
  showHeader = input<boolean>(true);
  filterBy = input<string>();
  scrollHeight = input<string>('200px');
  lazy = input<boolean>(false);
  virtualScroll = input<boolean>();
  loading = input<boolean>();
  virtualScrollItemSize = input<number>();
  loadingIcon = input<string>();
  virtualScrollOptions = input<any>();
  overlayOptions = input<any>({ appendTo: 'body' });
  ariaFilterLabel = input<string>();
  filterMatchMode = input<MatchExpressionMode>('contains');
  tooltip = input<string>('Selecione');
  tooltipPosition = input<'top' | 'left' | 'right' | 'bottom'>('top');
  tooltipPositionStyle = input<string>('absolute');
  tooltipStyleClass = input<string>();
  autofocusFilter = input<boolean>(true);
  display = input<'comma' | 'chip'>('chip');
  autocomplete = input<string>('off');
  showClear = input<boolean>(true);
  autofocus = input<boolean>();
  placeholder = input<string>('Selecione...');
  options = input<unknown[]>([]);
  filterValue = input<string | null>();
  selectAll = input<boolean | null>();
  focusOnHover = input<boolean>(true);
  filterFields = input<unknown[]>();
  selectOnFocus = input<boolean>(false);
  autoOptionFocus = input<boolean>(true);
  highlightOnSelect = input<boolean>(true);
  size = input<'small' | 'large'>();
  variant = input<'filled' | 'outlined'>();
  fluid = input<boolean>();
  appendTo = input<HTMLElement | 'body'>();

  typeahead = input<Subject<string>>(new Subject<string>());
  compareWith = input<CompareWithFn>((a: string, b: string) => a === b);

  onChangeEvent = new EventEmitter<unknown>();
  onFilter = new EventEmitter<unknown>();
  onFocus = new EventEmitter<unknown>();
  onBlur = new EventEmitter<unknown>();
  onClick = new EventEmitter<unknown>();
  onClear = new EventEmitter<void>();
  onPanelShow = new EventEmitter<unknown>();
  onPanelHide = new EventEmitter<unknown>();
  onLazyLoad = new EventEmitter<unknown>();
  onRemove = new EventEmitter<unknown>();
  onSelectAllChange = new EventEmitter<unknown>();

  classes = computed(() =>
    mergeClasses(
      variants({
        zSize: this.zSize(),
        zStatus: this.zStatus(),
        zBorderless: this.zBorderless(),
      }),
      this.class(),
    ),
  );

  value: { label: string; value: string }[] = [];

  protected onChange?: (value: { label: string; value: string }[]) => void;
  
  protected onTouched?: () => void;

  writeValue(value: any[]): void {
    this.value = value || [];
  }

  registerOnChange(fn: (value: { label: string; value: string }[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  remove(item: { label: string; value: string }): void {
    //
  }
}