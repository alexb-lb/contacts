import React from 'react';

const ContactsList = () => (
  <table className="table table-striped table-sm" style={{tableLayout: 'fixed', wordWrap: 'break-word'}}>
    <thead className="thead-dark">
    <tr>
      <th className="col-md-4" scope="col">Name</th>
      <th className="col-md-3" scope="col">Email</th>
      <th className="col-md-3" scope="col">Phone</th>
      <th className="col-md-2" scope="col">Action</th>
    </tr>
    </thead>
    <tbody>

    <tr>
      <td className="col-md-1" scope="row">
        Alexandr Bobrenko
      </td>
      <td className="col-md-1">
        oknerbob@gmail.com
      </td>
      <td className="col-md-5">
        +38 091 971 13 41
      </td>
      <td className="col-md-1">
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
    </tbody>
  </table>
);

export default ContactsList;