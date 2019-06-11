import React, { Component } from 'react';

class InputText extends Component {
    render() {
        const id = this.props.id;
        const name = this.props.name;
        const handleChange = this.props.onChange;
        const value = this.props.value;

        return (
            
                <div className="form-group" key={id}>
                    <label htmlFor={id}>{name}</label>
                    <input
                        type="text"
                        name={id}
                        onChange={handleChange}
                        value={value}
                        />
                </div>
        );
    }
}

export default InputText;