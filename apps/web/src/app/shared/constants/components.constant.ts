import { ComponentType } from '@angular/cdk/overlay';

import { ACCORDION } from '@b3/components/accordion/demo/accordion';
import { ALERT } from '@b3/components/alert/demo/alert';
import { ALERT_DIALOG } from '@b3/components/alert-dialog/demo/alert-dialog';
import { AVATAR } from '@b3/components/avatar/demo/avatar';
import { BADGE } from '@b3/components/badge/demo/badge';
import { BREADCRUMB } from '@b3/components/breadcrumb/demo/breadcrumb';
import { BUTTON } from '@b3/components/button/demo/button';
import { CALENDAR } from '@b3/components/calendar/demo/calendar';
import { CARD } from '@b3/components/card/demo/card';
import { CHECKBOX } from '@b3/components/checkbox/demo/checkbox';
import { COMBOBOX } from '@b3/components/combobox/demo/combobox';
import { COMMAND } from '@b3/components/command/demo/command';
import { DATE_PICKER } from '@b3/components/date-picker/demo/date-picker';
import { DIALOG } from '@b3/components/dialog/demo/dialog';
import { DIVIDER } from '@b3/components/divider/demo/divider';
import { DROPDOWN } from '@b3/components/dropdown/demo/dropdown';
import { EMPTY } from '@b3/components/empty/demo/empty';
import { FORM } from '@b3/components/form/demo/form';
import { ICON } from '@b3/components/icon/demo/icon';
import { INPUT } from '@b3/components/input/demo/input';
import { INPUT_GROUP } from '@b3/components/input-group/demo/input-group';
import { LAYOUT } from '@b3/components/layout/demo/layout';
import { LOADER } from '@b3/components/loader/demo/loader';
import { MENU } from '@b3/components/menu/demo/menu';
import { PAGINATION } from '@b3/components/pagination/demo/pagination';
import { POPOVER } from '@b3/components/popover/demo/popover';
import { PROGRESS_BAR } from '@b3/components/progress-bar/demo/progress-bar';
import { RADIO } from '@b3/components/radio/demo/radio';
import { RESIZABLE } from '@b3/components/resizable/demo/resizable';
import { SEGMENTED } from '@b3/components/segmented/demo/segmented';
import { SELECT } from '@b3/components/select/demo/select';
import { SHEET } from '@b3/components/sheet/demo/sheet';
import { SKELETON } from '@b3/components/skeleton/demo/skeleton';
import { SLIDER } from '@b3/components/slider/demo/slider';
import { SWITCH } from '@b3/components/switch/demo/switch';
import { TABLE } from '@b3/components/table/demo/table';
import { TABS } from '@b3/components/tabs/demo/tabs';
import { TOAST } from '@b3/components/toast/demo/toast';
import { TOGGLE } from '@b3/components/toggle/demo/toggle';
import { TOGGLE_GROUP } from '@b3/components/toggle-group/demo/toggle-group';
import { TOOLTIP } from '@b3/components/tooltip/demo/tooltip';

export interface ComponentData {
  componentName: string;
  description: string;
  examples: ExampleData[];
  fullWidth?: boolean;
}

export interface ExampleData {
  name: string;
  type?: string;
  column?: boolean;
  component: ComponentType<unknown>;
  onlyDemo?: boolean;
  fullScreen?: boolean;
  fullWidth?: boolean;
  flexAlign?: 'start' | 'center' | 'end';
}

export const COMPONENTS: ComponentData[] = [
  ALERT,
  ALERT_DIALOG,
  ACCORDION,
  AVATAR,
  BADGE,
  BUTTON,
  BREADCRUMB,
  CALENDAR,
  CARD,
  CHECKBOX,
  COMBOBOX,
  COMMAND,
  DATE_PICKER,
  DIALOG,
  DIVIDER,
  DROPDOWN,
  EMPTY,
  FORM,
  ICON,
  INPUT,
  INPUT_GROUP,
  LAYOUT,
  LOADER,
  MENU,
  PAGINATION,
  POPOVER,
  PROGRESS_BAR,
  RADIO,
  RESIZABLE,
  SEGMENTED,
  SELECT,
  SHEET,
  SLIDER,
  SKELETON,
  SWITCH,
  TABLE,
  TABS,
  TOAST,
  TOGGLE,
  TOGGLE_GROUP,
  TOOLTIP,
];
