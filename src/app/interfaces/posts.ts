export interface posts{
    _id : string,
    title : string,
    subtitle : string,
    description : {
        title : string,
        paragraph : string
    },
    images : string[],
    contact : contactI[]
}

export interface contactI{
    name : string,
    url : string
}