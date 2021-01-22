export interface posts{
    _id : string,
    title : string,
    subtitle : string,
    description : {
        title : string,
        paragraph : string
    },
    images : string[],
    contact : contactI[],
    features :  featuresI,
    map : mapI
}

export interface mapI {
    url : string,
    ubication : string
}

export interface featuresI {
    area : string,
    offices : string,
    toilets : string,
    parkings : string
}

export interface contactI{
    name : string,
    url : string
}