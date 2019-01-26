"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import App from '/js/Components/App';
import PhrasalVerbs from '/js/AppPhrasalVerbs';

let container = document.getElementById("app-container");
ReactDOM.render(<App verbs={PhrasalVerbs} />, container);