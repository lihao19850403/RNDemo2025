import { ComponentType } from 'react';

export interface AppPageModel {
  pageName: string;
  pageTitle: string;
  pageContent: ComponentType;
}
