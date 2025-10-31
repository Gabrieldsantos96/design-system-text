import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { generateId } from '../../../shared/utils/utils';
import { B3ButtonComponent } from '../../button/button.component';
import { B3InputDirective } from '../../input/input.directive';
import { B3FormModule } from '../form.module';

@Component({
  selector: 'b3-demo-form-default',
  standalone: true,
  imports: [FormsModule, B3ButtonComponent, B3InputDirective, B3FormModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <form class="space-y-6 max-w-sm">
      <b3-form-field>
        <label b3-form-label zRequired [for]="idFullName">Full Name</label>
        <b3-form-control>
          <input b3-input type="text" [id]="idFullName" placeholder="Enter your full name" [(ngModel)]="fullName" name="fullName" />
        </b3-form-control>
        <b3-form-message>This is your display name.</b3-form-message>
      </b3-form-field>

      <b3-form-field>
        <label b3-form-label zRequired [for]="idEmail">Email</label>
        <b3-form-control>
          <input b3-input type="email" [id]="idEmail" placeholder="Enter your email" [(ngModel)]="email" name="email" />
        </b3-form-control>
        <b3-form-message>We'll never share your email with anyone else.</b3-form-message>
      </b3-form-field>

      <b3-form-field>
        <label b3-form-label [for]="idBio">Bio</label>
        <b3-form-control>
          <textarea b3-input [id]="idBio" placeholder="Tell us about yourself" rows="3" [(ngModel)]="bio" name="bio"></textarea>
        </b3-form-control>
        <b3-form-message>Optional: Brief description about yourself.</b3-form-message>
      </b3-form-field>

      <button b3-button zType="default" type="submit">Submit</button>
    </form>
  `,
})
export class B3DemoFormDefaultComponent {
  protected readonly idFullName = generateId('fullName');
  protected readonly idEmail = generateId('email');
  protected readonly idBio = generateId('bio');

  fullName = '';
  email = '';
  bio = '';
}
