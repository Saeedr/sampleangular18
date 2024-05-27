export interface contactinterface{
    name:string,
    email:string,
    description: string
}
export interface contactinterfaceFedBack{
    status:boolean,
    message?:string,
    data?:any
}