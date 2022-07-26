import React, { Component } from 'react';

class EmploymentItems extends Component {
  render() {
    const { fields, onChange, remove } = this.props;
    const { id, name, position, yearStart, yearEnd, desc } = fields;
    return (
      <>
        <label htmlFor={`${id}-name`}>
          Company name
          <input
            type="text"
            name="name"
            id={`${id}-name`}
            value={name}
            onChange={(e) => onChange(e, id)}
          />
        </label>
        <label htmlFor={`${id}-pos`}>
          Title
          <input
            type="text"
            name="position"
            id={`${id}-pos`}
            value={position}
            onChange={(e) => onChange(e, id)}
          />
        </label>
        <label htmlFor={`${id}-yr-frm`}>
          From
          <input
            type="text"
            name="yearStart"
            id={`${id}-yr-frm`}
            maxLength={4}
            pattern="[0-9]+"
            placeholder={`Year e.g. ${new Date().getFullYear()}`}
            value={yearStart}
            onChange={(e) => onChange(e, id)}
          />
        </label>
        <label htmlFor={`${id}-yr-to`}>
          To
          <input
            type="text"
            name="yearEnd"
            id={`${id}-yr-to`}
            maxLength={4}
            pattern="[0-9]+"
            placeholder="Year or Present"
            value={yearEnd}
            onChange={(e) => onChange(e, id)}
          />
        </label>
        <label htmlFor={`${id}-desc`} className="span-2">
          Description
          <textarea
            name="desc"
            id={`${id}-desc`}
            value={desc}
            onChange={(e) => onChange(e, id)}
          />
        </label>
        <button type="button" onClick={() => remove(id)} className="remove-item span-2">
          Remove
        </button>
      </>
    );
  }
}

export default EmploymentItems;
