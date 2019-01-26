"use strict";
import React from 'react';

class Label extends React.Component {
    render() {
        let placeholderText = this.props.isEn ? "Hidden content" : "Ukryta zawartość";
        let labelValue = this.props.showValue ? this.props.value : placeholderText;
        let placeholderColor = this.props.showValue ? "" : " text-secondary font-weight-light small";
        let styleClasses = this.props.isEn ? "custom-control-label" : "custom-control-label-reverted right-pulled";
        return (
            <label className={styleClasses + placeholderColor}
                htmlFor={this.props.id} >
                {labelValue}
            </label>
        );
    }
}

export default Label;