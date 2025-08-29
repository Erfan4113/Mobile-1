import { Routes } from '@angular/router';

import {AddComponent} from './_Pages/add/add.component';
import {ListComponent} from './_Pages/list/list.component';


export const routes: Routes = [
  { path: '' , component: ListComponent },
  { path: 'list' , component: ListComponent },
  { path: 'add' , component: AddComponent }

];
