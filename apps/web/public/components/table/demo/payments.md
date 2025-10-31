```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3BadgeComponent } from '../../badge/badge.component';
import { B3ButtonComponent } from '../../button/button.component';
import { B3IconComponent } from '../../icon/icon.component';
import { B3TableBodyComponent, B3TableCellComponent, B3TableComponent, B3TableHeadComponent, B3TableHeaderComponent, B3TableRowComponent } from '../table.component';

export interface Payment {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
}

@Component({
  selector: 'b3-demo-table-payments',
  standalone: true,
  imports: [
    B3TableComponent,
    B3TableHeaderComponent,
    B3TableBodyComponent,
    B3TableRowComponent,
    B3TableHeadComponent,
    B3TableCellComponent,
    B3BadgeComponent,
    B3ButtonComponent,
    B3IconComponent,
  ],
  template: `
    <div class="w-full">
      <div class="overflow-hidden rounded-md border">
        <table b3-table>
          <thead b3-table-header>
            <tr b3-table-row>
              <th b3-table-head>Status</th>
              <th b3-table-head>Email</th>
              <th b3-table-head class="text-right">Amount</th>
              <th b3-table-head class="w-16">Actions</th>
            </tr>
          </thead>
          <tbody b3-table-body>
            @for (payment of payments; track payment.id) {
              <tr b3-table-row>
                <td b3-table-cell>
                  <b3-badge [zType]="getStatusVariant(payment.status)">
                    {{ payment.status }}
                  </b3-badge>
                </td>
                <td b3-table-cell>
                  <div class="lowercase">{{ payment.email }}</div>
                </td>
                <td b3-table-cell>
                  <div class="text-right font-medium">{{ formatCurrency(payment.amount) }}</div>
                </td>
                <td b3-table-cell>
                  <div class="flex items-center gap-2">
                    <b3-button zType="ghost" (click)="copyPaymentId(payment.id)" title="Copy payment ID">
                      <div b3-icon zType="copy"></div>
                    </b3-button>
                    <b3-button zType="ghost" (click)="viewDetails(payment)" title="View details">
                      <div b3-icon zType="eye"></div>
                    </b3-button>
                  </div>
                </td>
              </tr>
            } @empty {
              <tr b3-table-row>
                <td b3-table-cell [attr.colspan]="4" class="h-24 text-center">No results.</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class B3DemoTablePaymentsComponent {
  payments: Payment[] = [
    {
      id: 'm5gr84i9',
      amount: 316,
      status: 'success',
      email: 'ken99@example.com',
    },
    {
      id: '3u1reuv4',
      amount: 242,
      status: 'success',
      email: 'Abe45@example.com',
    },
    {
      id: 'derv1ws0',
      amount: 837,
      status: 'processing',
      email: 'Monserrat44@example.com',
    },
    {
      id: '5kma53ae',
      amount: 874,
      status: 'success',
      email: 'Silas22@example.com',
    },
    {
      id: 'bhqecj4p',
      amount: 721,
      status: 'failed',
      email: 'carmella@example.com',
    },
    {
      id: 'abc123ef',
      amount: 456,
      status: 'pending',
      email: 'jane.doe@example.com',
    },
  ];

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  }

  getStatusVariant(status: Payment['status']): 'default' | 'secondary' | 'destructive' | 'outline' {
    switch (status) {
      case 'success':
        return 'default';
      case 'processing':
        return 'secondary';
      case 'failed':
        return 'destructive';
      case 'pending':
        return 'outline';
      default:
        return 'secondary';
    }
  }

  copyPaymentId(id: string): void {
    navigator.clipboard.writeText(id);
    console.log('Payment ID copied:', id);
  }

  viewDetails(payment: Payment): void {
    console.log('View payment details:', payment);
  }
}

```