export class EmployeeModel {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  constructor(id:number,
    first_name:string,
    last_name:string,
    email:string,
    avatar:string){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.avatar = avatar;
    }

}
export class EmployeeModelList {
page:number;
per_page:number;
data:EmployeeModel[]
constructor(data:EmployeeModel[],page:number,per_page:number)
{
  this.page=page
  this.per_page=per_page
  this.data=data;

}
}
