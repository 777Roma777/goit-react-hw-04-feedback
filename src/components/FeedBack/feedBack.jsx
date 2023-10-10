import React from 'react';
import css from './feedBack.module.css';

export const FeedBack = ( {onLeaveFeedback, options}) => {
 
    
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

