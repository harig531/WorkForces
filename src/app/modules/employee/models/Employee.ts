export class EmployeeModel {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  avatar?: string;
}
export class EmployeeModelList {
page?:number;
per_page?:number;
total?:number;
total_pages?:number;
data?:EmployeeModel[];
}
