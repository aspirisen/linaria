import type { TransformOptions } from '@babel/core';

import type { ClassNameFn, VariableNameFn } from '@linaria/utils';

export interface IOptions {
  classNameSlug?: string | ClassNameFn;
  displayName: boolean;
  variableNameSlug?: string | VariableNameFn;
  propsFiltering?: 'automatic' | 'dollar-sign';
}

export type IFileContext = Pick<TransformOptions, 'root' | 'filename'>;
