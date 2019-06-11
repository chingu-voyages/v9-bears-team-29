import React, { Component } from 'react';

class FormSelect extends Component {
    render() {
        const id = this.props.id;
        const name = this.props.name;
        const fieldOptions = this.props.fieldOptions;
        const handleChange = this.props.onChange;
        const value = this.props.value;

        return (
            <div className="form-group" key={id}>
                    <label htmlFor={id}>{name}</label>
                    <select onChange={handleChange} name={id} value={value}>
                        {fieldOptions.map((option) => {
                            return ( <option>{option}</option> )
                        })}
                    </select>                
                </div>
        )
    }
}

export default FormSelect;