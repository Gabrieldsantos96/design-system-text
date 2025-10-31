# API

## [b3-empty] <span class="api-type-label component">Component</span>

> `b3-empty` component displays a placeholder when no data is available, commonly used in tables, lists, or search results.

To customize the empty, pass the following props to the component.

| Property       | Description                         | Type                          | Default |
| -------------- | ----------------------------------- | ----------------------------- | ------- |
| `zIcon`        | Icon to display                     | `B3Icon`                    | -       |
| `zImage`       | Image URL or custom template        | `string \| TemplateRef<void>` | -       |
| `zDescription` | Description text or custom template | `string \| TemplateRef<void>` | -       |
| `zTitle`       | Title text or custom template       | `string \| TemplateRef<void>` | -       |
| `zActions`     | Array of action templates           | `TemplateRef<void>[]`         | []      |
| `class`        | Custom CSS classes                  | `ClassValue`                  | ' '     |
