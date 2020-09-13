/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import ReactDOM from 'react-dom';
import Form from 'react-jsonschema-form';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { schema } from './schema';

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
    <h1>
      <Form
        schema={schema}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </h1>
  );
}
