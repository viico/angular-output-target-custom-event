import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { format } from '../../utils/utils';
import { NameClickedEvent } from './my-component-interface';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   *
   * Emitted when the name was clicked
   */
  @Event() nameClicked!: EventEmitter<NameClickedEvent>;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private onClick(): void {
    this.nameClicked.emit({
      first: this.first,
      middle: this.middle,
      last: this.last
    });
  }

  render() {
    return <div onClick={_ => this.onClick()}>Hello, World! I'm {this.getText()}</div>;
  }
}
