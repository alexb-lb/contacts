import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({name, amount, createdAt, id}) => (
  /**
   <Link className="list-item" to={`/edit/${id}`}>
   <div>
   <h3 className="list-item__title">{description}</h3>
   <span className="list-item__subtitle">
   {moment(createdAt).format('MMMM Do, YYYY')}
   </span>
   </div>
   <h3 className="list-item__data">
   {numeral(amount / 100).format('$0,0.00')}
   </h3>
   </Link>
   */

  <tr className="contact-list-item">
    <td className="col-md-4 contact-list-item-field" scope="row">
      <Link to={`/edit/1`}>Alexandr Bobrenko</Link>
    </td>
    <td className="col-md-3 contact-list-item-field">
      <Link to={`/edit/1`}>oknerbob@gmail.com</Link>
    </td>
    <td className="col-md-3 contact-list-item-field">
      <Link to={`/edit/1`}>+38 091 971 13 41</Link>
    </td>
    <td className="col-md-2">
      <button className="btn btn-danger btn-delete-contact">
        <svg viewBox="0 0 32 32">
          <path
            d="M20.377,16.519l6.567-6.566c0.962-0.963,0.962-2.539,0-3.502l-0.876-0.875c-0.963-0.964-2.539-0.964-3.501,0  L16,12.142L9.433,5.575c-0.962-0.963-2.538-0.963-3.501,0L5.056,6.45c-0.962,0.963-0.962,2.539,0,3.502l6.566,6.566l-6.566,6.567  c-0.962,0.963-0.962,2.538,0,3.501l0.876,0.876c0.963,0.963,2.539,0.963,3.501,0L16,20.896l6.567,6.566  c0.962,0.963,2.538,0.963,3.501,0l0.876-0.876c0.962-0.963,0.962-2.538,0-3.501L20.377,16.519z"
            fill="#515151"/>
        </svg>
      </button>
    </td>
  </tr>
);

export default ExpenseListItem;