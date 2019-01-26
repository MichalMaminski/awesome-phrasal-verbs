"use strict";
import React from 'react';

class TableHeader extends React.Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col col-md-4 pl-md-4 py-4 shadow-none bg-warning rounded-left border">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox"
                            className="custom-control-input"
                            id="check-all-en"
                            checked={this.props.headerContext.en.isChecked}
                            onChange={(event) => this.props.changeAllSelected(event.target, "en")}></input>
                        <label className="custom-control-label" htmlFor="check-all-en">Check all</label>
                    </div>
                </div>

                <div className="col col-md-4 pr-md-4 py-4 shadow-none bg-warning rounded-right border">
                    <div className="custom-control-right custom-checkbox text-right">
                        <input type="checkbox"
                            className="custom-control-input"
                            id="check-all-pl"
                            checked={this.props.headerContext.pl.isChecked}
                            onChange={(event) => this.props.changeAllSelected(event.target, "pl")}></input>
                        <label className="custom-control-label-reverted right-pulled" htmlFor="check-all-pl">Zaznacz wszystko</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default TableHeader;