# Form API Reference

## B3FormFieldComponent

Container component that provides proper spacing and structure for form elements.

### Props

| Name    | Type         | Default | Description            |
| ------- | ------------ | ------- | ---------------------- |
| `class` | `ClassValue` | `''`    | Additional CSS classes |

---

## B3FormLabelComponent

Accessible label component with optional required indicator.

### Props

| Name        | Type         | Default | Description                   |
| ----------- | ------------ | ------- | ----------------------------- |
| `class`     | `ClassValue` | `''`    | Additional CSS classes        |
| `zRequired` | `boolean`    | `false` | Shows required indicator (\*) |

---

## B3FormControlComponent

Wrapper component for form controls that provides proper positioning and styling context.

### Props

| Name    | Type         | Default | Description            |
| ------- | ------------ | ------- | ---------------------- |
| `class` | `ClassValue` | `''`    | Additional CSS classes |

---

## B3FormMessageComponent

Component for displaying helper text, validation messages, and other form-related information.

### Props

| Name    | Type                                             | Default     | Description                  |
| ------- | ------------------------------------------------ | ----------- | ---------------------------- |
| `class` | `ClassValue`                                     | `''`        | Additional CSS classes       |
| `zType` | `'default' \| 'error' \| 'success' \| 'warning'` | `'default'` | Message type affecting color |
