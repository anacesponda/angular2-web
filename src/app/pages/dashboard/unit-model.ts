
import {Page} from "../models/page-model";
export class Unit {
  id:number;
  title:string;
  description:string;
  number:number;
  pages: Page[];
  createdAt:string;
  updatedAt:string
}
