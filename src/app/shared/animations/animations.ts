import {animate, state, style, transition, trigger} from "@angular/animations";


export const collapse =
  trigger('collapse', [
    state('open', style({
      opacity: '1',
      display: 'block',
      transform: 'translate3d(0, 0, 0)'
    })),
    state('closed', style({
      height: 0,
      opacity: '0',
      display: 'none',
      transform: 'translate3d(0, 0, 0)'
    })),
    transition('closed => open', animate('250ms 100ms')),
    transition('open => closed', animate('250ms 100ms'))
  ]);
