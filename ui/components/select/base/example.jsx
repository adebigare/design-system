// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import { MultiSelect, DefaultSnapShot } from '../../dueling-picklist';
import { FormElement } from '../../form-element';

const selectLabel = 'Select Label';
const defaultSelectId = 'select-01';
const errorId = 'error-01';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let Select = props => (
  <div className="slds-select_container">
    <select
      aria-describedby={props['aria-describedby']}
      className={classNames('slds-select', props.className)}
      disabled={props.disabled}
      id={props.id || defaultSelectId}
      required={props.required}
      multiple={props.multiple}
    >
      {props.children}
    </select>
  </div>
);

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Required = props => (
  <FormElement labelContent={selectLabel} inputId={defaultSelectId} isRequired>
    <Select id={defaultSelectId} required>
      <option value="">Please select</option>
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </Select>
  </FormElement>
);

let ErrorState = props => (
  <FormElement
    formElementClassName="slds-has-error"
    labelContent={selectLabel}
    inputId={defaultSelectId}
    errorId={errorId}
    isRequired
    inlineMessage="This field is required"
  >
    <Select id={defaultSelectId} aria-describedby={errorId} required>
      <option value="">Please select</option>
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </Select>
  </FormElement>
);

let Disabled = props => (
  <FormElement labelContent={selectLabel} inputId={defaultSelectId}>
    <Select id={defaultSelectId} disabled>
      <option value="">Please select</option>
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </Select>
  </FormElement>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <FormElement labelContent={selectLabel} inputId={defaultSelectId}>
    <Select id={defaultSelectId}>
      <option value="">Please select</option>
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </Select>
  </FormElement>
);

export let states = [
  {
    id: 'select-required',
    label: 'Required',
    element: <Required />
  },
  {
    id: 'select-error',
    label: 'Error',
    element: <ErrorState />
  },
  {
    id: 'select-disabled',
    label: 'Disabled',
    element: <Disabled />
  },
  {
    id: 'select-multiple',
    label: 'Multiple Selection',
    element: <MultiSelect dataSet={DefaultSnapShot} noReorder />
  }
];

/// ///////////////////////////////////////////
// Deprecated
/// ///////////////////////////////////////////

export const MultipleDeprecated = props => (
  <FormElement labelContent={selectLabel} inputId={defaultSelectId}>
    <Select id={defaultSelectId} multiple>
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </Select>
  </FormElement>
);
