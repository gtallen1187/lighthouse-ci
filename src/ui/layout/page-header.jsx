/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

import {h} from 'preact';
import './page-header.css';

/** @param {{label: string, value: string}} props */
const FakeSelect = props => {
  return (
    <div className="page-header-picker">
      <span className="page-header-picker__label">{props.label}</span>
      <span>{props.value}</span>
    </div>
  );
};

export const PageHeader = () => {
  return (
    <div className="page-header">
      <div className="page-header__logo" />
      <FakeSelect label="Project" value="Sample Project" />
      <FakeSelect label="URL" value="https://example.com/blog" />
      <FakeSelect label="Branch" value="master" />
    </div>
  );
};