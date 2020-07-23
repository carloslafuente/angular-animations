import {
  trigger,
  transition,
  state,
  animate,
  style,
} from '@angular/animations';

export const fadeFromTop = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [animate(1000)]),
]);

export const fadeFromRight = trigger('fadeOut', [
  state('void', style({ transform: 'translateX(-40px)' })),
  transition(':enter, :leave', [animate(1000)]),
]);

