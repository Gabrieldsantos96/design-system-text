# API

## [b3-table] <span class="api-type-label directive">Directive</span>

> `b3-table` is a directive that accepts all properties supported by a native `<table>`. It automatically styles all nested table elements (`thead`, `tbody`, `tr`, `th`, `td`, `caption`) without requiring additional directives.

To customize the table, pass the following props to the directive.

| Property | Description | Type                                | Default   |
| -------- | ----------- | ----------------------------------- | --------- |
| `zType`  | Table type  | `default \| striped \| bordered`    | `default` |
| `zSize`  | Table size  | `default \| compact \| comfortable` | `default` |

## Usage

### Basic Table

```html
<table b3-table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>
```

### With Data Binding

```html
<table b3-table zType="striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    @for (person of people; track person.id) {
    <tr>
      <td>{{ person.name }}</td>
      <td>{{ person.age }}</td>
    </tr>
    }
  </tbody>
</table>
```

## Optional Sub-Components

For more granular control, you can use individual table components:

### [b3-table-header] <span class="api-type-label component">Component</span>

> `thead[b3-table-header]` applies styles to table header sections.

### [b3-table-body] <span class="api-type-label component">Component</span>

> `tbody[b3-table-body]` applies styles to table body sections.

### [b3-table-row] <span class="api-type-label component">Component</span>

> `tr[b3-table-row]` applies styles to table rows.

### [b3-table-head] <span class="api-type-label component">Component</span>

> `th[b3-table-head]` applies styles to table header cells.

### [b3-table-cell] <span class="api-type-label component">Component</span>

> `td[b3-table-cell]` applies styles to table data cells.

### [b3-table-caption] <span class="api-type-label component">Component</span>

> `caption[b3-table-caption]` applies styles to table captions.
