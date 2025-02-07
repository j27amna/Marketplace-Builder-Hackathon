export interface Products {
    image: any;
    _id: string;
    title: string;
    _type: "product";
    description?: "string";
    productImage?: {
        asset:{
            _ref : string;
            _type: "image"
        }
    };
    price: number;
    tags?: string[] | string;
    discountPercentage?: number;
    isNew?: boolean | string;
    inventory: number;
}