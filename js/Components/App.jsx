"use strict";
import React from 'react';
import TableHeader from './TableHeader';
import TabelCell from './TabelCell';

class App extends React.Component {
    constructor(props) {
        super(props);

        let allEnglishVerbsChecked = true;
        let allPolishVerbsChecked = false;
        let phrasalVerbsViewModel = props.verbs.map(function (verb) {
            return {
                en: { isChecked: allEnglishVerbsChecked, value: verb.en, id: verb.en.replace(" ", "-") + "-" + "en" },
                pl: { isChecked: allPolishVerbsChecked, value: verb.pl, id: verb.en.replace(" ", "-") + "-" + "pl" }
            };
        });
        this.state = {
            phrasalVerbs: phrasalVerbsViewModel,
            headerContext: { en: { isChecked: allEnglishVerbsChecked }, pl: { isChecked: allPolishVerbsChecked } }
        };
    }

    changeAllSelected(sourceElement, lang) {
        this.setState(prevState => {
            prevState.phrasalVerbs.forEach(verb => {
                verb[lang].isChecked = sourceElement.checked;
            });
            prevState.headerContext[lang].isChecked = sourceElement.checked;
            return prevState;
        });
    }

    verbSelectionChange(index, lang) {
        this.setState(prevState => {
            prevState.phrasalVerbs[index][lang].isChecked = !prevState.phrasalVerbs[index][lang].isChecked;
            prevState.headerContext[lang].isChecked = prevState.phrasalVerbs.find(verb => { return !verb[lang].isChecked }) === undefined;
            return prevState;
        });
    }

    render() {
        let cellsWithVerbs = this.state.phrasalVerbs.map((verb, index) => {
            return (
                <TabelCell key={index} verb={verb} onCheckBoxChange={(lang) => this.verbSelectionChange(index, lang)} />
            );
        })
        return (
            <React.Fragment>
                <div className="jumbotron bg-light px-5 p-4 mb-2 shadow-sm">
                    <h1 className="display-5">Awesome phrasal verbs</h1>
                    <p className="lead text-black-50">Learn with pleasure</p>
                </div>
                <TableHeader headerContext={this.state.headerContext} changeAllSelected={(element, lang) => this.changeAllSelected(element, lang)} />
                {cellsWithVerbs}
            </React.Fragment>
        );
    }
}

export default App;