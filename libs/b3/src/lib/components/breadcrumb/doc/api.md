# API

## [b3-breadcrumb]

| Property       | Description                         | Type                     | Default   |
| -------------- | ----------------------------------- | ------------------------ | --------- |
| `[class]`      | Custom css classes                  | `string`                 | `''`      |
| `[zSize]`      | Breadcrumb size                     | `sm \| md \| lg`         | `'md'`    |
| `[zAlign]`     | Horizontal alignment                | `start \| center \| end` | `'start'` |
| `[zWrap]`      | Wrapping behavior                   | `wrap \| nowrap`         | `'wrap'`  |
| `[zSeparator]` | Separator between breadcrumb items. | `string \| TemplateRef`  | `null`    |

## [b3-breadcrumb-item]

| Property        | Description                    | Type     | Default |
| --------------- | ------------------------------ | -------- | ------- |
| `[class]`       | Custom css classes             | `string` | `''`    |
| `[routerLink]`  | Angular router link (optional) | `any`    | -       |
| `[queryParams]` | Query parameters               | `any`    | -       |

**Note:** All RouterLink inputs are supported through host directives.

## [b3-breadcrumb-ellipsis]

| Property   | Description        | Type              | Default   |
| ---------- | ------------------ | ----------------- | --------- |
| `[class]`  | Custom css classes | `string`          | `''`      |
| `[zColor]` | Ellipsis color     | `muted \| strong` | `'muted'` |
