import React from 'react';
import './App.css';

import PluggableFormsSetup from '@pluggable-forms/core';
import uiLib from '@pluggable-forms/ui-material';
import validationLib from '@pluggable-forms/validation-joi';

import models from './models';

const PlugabbleForms = PluggableFormsSetup({
  models: models,
  libs: {
    uiLib,
    validationLib,
  },
  defaultSchemaSettings: {
    allowUpdates: false,
  },
});

function App() {
  return (
    <PlugabbleForms.Provider>
      <main className="App">Test!</main>
    </PlugabbleForms.Provider>
  );
}

export default App;
