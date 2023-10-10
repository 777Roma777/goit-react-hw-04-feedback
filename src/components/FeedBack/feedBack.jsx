import React, { Component } from 'react';
import css from './feedBack.module.css';

export class FeedBack extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;
    return (
      <div>
        <ul className={css.listFeedBack}>
          {options.map(name => (
            <li className={css.itemList} key={name}>
              <button
                type="button"
                className={css.btnItem}
                onClick={() => onLeaveFeedback(name)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
