/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { DatabaseDataModel } from './DatabaseDataModel';

export interface DatabaseDataFormat<T> {
  processResult: (model: DatabaseDataModel<any, any>, data: T) => void;
}