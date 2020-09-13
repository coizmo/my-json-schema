/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import ReactDOM from 'react-dom';
import MaterialJsonSchemaForm from 'react-jsonschema-form-material-ui';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

// Internals
const schema = require('./schema.json');
const uiSchema = require('./ui-schema.json');
// const formData = require('./ui-formData.json');
const formData = {};

function handleChange({ formData }) {
  // 入力されたデータ
  console.log(formData);
}

function handleSubmit({ formData }) {
  // 入力されたデータ
  console.log(formData);
}

export default function HomePage() {
  return (
    <div>
      <textarea id="form-data" value={formData} />
      <MaterialJsonSchemaForm
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
