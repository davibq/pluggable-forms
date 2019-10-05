import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const normalizationFns = {
  default: (fn) => (ev) => fn(ev.target.value),
};

const TextComponent = ({ onChange, ...props }) => (
  <TextField onChange={normalizationFns.default(onChange)} {...props} />
);
TextComponent.propTypes = {
  onChange: PropTypes.func,
};

export default function UILib() {
  return {
    TextComponent,
  };
}
