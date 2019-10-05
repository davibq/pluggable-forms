import React from 'react';

import DetailView from './components/DetailView';
import ListView from './components/ListView';

export default function setup({
  models,
  libs: { validationLib },
  defaultSchemaSettings = {
    allowUpdate: true,
    allowCreate: true,
    allowDelete: true,
    allowList: true,
  },
}) {
  return React.createContext({
    _libs: {
      validation: validationLib(),
    },
    models: models.reduce(
      (accum, model) => ({
        ...accum,
        [model.schema.label]: {
          _validation: model.validation,
          _schema: {
            ...model.schema,
            settings: {
              ...defaultSchemaSettings,
              ...model.schema.settings,
            },
          },
          ListView,
          DetailView,
        },
      }),
      {}
    ),
  });
}
