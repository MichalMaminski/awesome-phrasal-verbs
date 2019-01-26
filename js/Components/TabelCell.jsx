"use strict";
import React from 'react';
import Label from './Label';

class TabelCell extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-center">
                    <div className="col col-md-4 pl-md-3 py-2 rounded-left border-left border-bottom border-right hover">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox"
                                className="custom-control-input"
                                id={this.props.verb.en.id}
                                checked={this.props.verb.en.isChecked}
                                onChange={() => this.props.onCheckBoxChange("en")} />

                            <Label isEn={true}
                                showValue={this.props.verb.en.isChecked}
                                id={this.props.verb.en.id}
                                value={this.props.verb.en.value} />
                        </div>
                    </div>
                    <div className="col col-md-4 pr-md-3 py-2 rounded-right border-right border-bottom border-right hover">
                        <div className="custom-control-right custom-checkbox text-right">
                            <input className="custom-control-input"
                                type="checkbox"
                                id={this.props.verb.pl.id}
                                checked={this.props.verb.pl.isChecked}
                                onChange={() => this.props.onCheckBoxChange("pl")} />
                            <Label isEn={false}
                                showValue={this.props.verb.pl.isChecked}
                                id={this.props.verb.pl.id}
                                value={this.props.verb.pl.value} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TabelCell;