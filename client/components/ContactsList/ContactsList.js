import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import SearchContact from '../SearchContact/SearchContact';

import ContactListItem from '../ContactListItem/ContactListItem';
import AddContactButton from '../AddContactButton/AddContactButton';
// import selectExpenses from '../selectors/expenses';

const ContactsList = props => (
  <section className="page-contacts-list">
    <nav className="row justify-content-between contacnt-list-nav m-0 p-0">
      <div className="col-md-8 align-self-end p-0">
        <SearchContact />
      </div>
      <div className="col-md-4 align-self-start p-0">
        <AddContactButton/>
      </div>
    </nav>
    <div>
      <table className="table table-sm table-hover table-striped" style={{tableLayout: 'fixed', wordWrap: 'break-word'}}>
        <thead className="thead-dark">
          <tr>
            <th className="col-md-4" scope="col">Name</th>
            <th className="col-md-3" scope="col">Email</th>
            <th className="col-md-3" scope="col">Phone</th>
            <th className="col-md-2" scope="col"></th>
          </tr>
        </thead>
        <tbody className="contacts-list-body">
        {
          props.expenses.length === 0 ? (
            <div className="list-item__message">
              <span>No contacts</span>
            </div>
          ) : (
            props.expenses.map((expense, i, arr) => {
              return <ContactListItem key={expense.id} {...expense}/>
            })
          )
        }
        </tbody>
      </table>
    </div>
  </section>
);

// const mapStateToProps = (state) => {
//   return {
//     contacts: searchContacts(state.expenses, state.filters)
//   }
// };

// сначала передаем функ, которая достает данные из Redux Store
// потом указываем, куда эти данные нужно вывести
export default connect(mapStateToProps)(ContactsList);