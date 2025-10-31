```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3TableComponent } from '../table.component';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'b3-demo-table-simple',
  standalone: true,
  imports: [B3TableComponent],
  template: `
    <table b3-table>
      <caption>
        A list of your recent invoices.
      </caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        @for (data of listOfData; track data.key) {
          <tr>
            <td class="font-medium">{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
          </tr>
        }
      </tbody>
    </table>
  `,
})
export class B3DemoTableSimpleComponent {
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
}

```