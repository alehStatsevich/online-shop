import backpack1 from '../common/img/backpack1.png'


type PriceType = {
    amount: number,
    priceFormatted: string
}
type pricePromotialType = {
    amount: number,
    priceFormatted: string
}
export type ProductsType = {
    id: string,
    name: string,
    price: PriceType,
    pricePromotial?: pricePromotialType,
    decimal: number,
    image: any
}

export type initialStateType = {
    elementsForBasket: Array<{ product: ProductsType, count: number}>
    elements: Array<ProductsType>
}

export const addToCartAC = (id: string) => ({type: 'ADD_TO_CART', id} as const)
export const addProductAC = (id: string) => ({type: 'ADD_PRODUCT', id} as const)
export const deleteProductAC = (id: string) => ({type: 'DELETE_PRODUCT', id} as const)
export const deleteAllProductAC = (id: string) => ({type: 'DELETE_ALL_PRODUCT', id} as const)
export type AddCartType = ReturnType<typeof addToCartAC>
export type addProductType = ReturnType<typeof addProductAC>
export type deleteProductAC = ReturnType<typeof deleteProductAC>
export type deleteAllProductAC = ReturnType<typeof deleteAllProductAC>

type ActionsType = AddCartType | addProductType | deleteProductAC | deleteAllProductAC

const initialState: initialStateType = {
    elementsForBasket: [],
    elements: [
        {
            "id": "e859e78c-1309-40fd-92a0-efa37b9cd4ea",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": backpack1
        },
        {
            "id": "f0f58263-cd0f-4a25-8205-4a89706e203a",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "30d00737-5a93-4d59-9bea-201d30fb1d0a",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "184d2344-061b-405d-bf8c-aab2fa578d0b",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "1a14e6aa-b757-4c37-ac3e-c5f92a0adc54",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "5007aeb3-21ec-4052-9664-b97ece3807e8",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "7f39a9a8-4f3d-44ef-bce6-4209688754e6",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "de8d194a-7e5b-476a-8cb5-6b58b3405f4c",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "74b607a0-a135-4852-8631-cea25df6ae72",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "5431d5df-710a-48fc-b35e-13b7c3b9e538",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "37bca50a-4e40-4507-946a-c2d2f3a7ca77",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "6302f1d2-ae70-45fd-b58b-2f6804d7b5a8",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "80ea4ce9-da33-4d24-b4db-45e37abb5bf5",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "cd2de511-da5c-441f-9dc6-d991b3983553",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "b1934f02-bd5b-487c-8b4a-45102d77ccf3",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "2254c925-d39f-44f4-b565-b636c905e7a3",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "e8aa7dfb-4d85-4b88-85b4-a6c371b787ba",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "97fee1bc-0d4c-4f4a-9ed0-6bd2ed3090fb",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "dbf36e68-873e-43f1-84e3-509e8d1f8a35",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "08e9abef-c0b2-4873-bdb4-351f61563318",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "ca6c2590-2205-4931-a8b3-28251a9e76df",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "045d48cb-5488-44c4-b84d-efb4bd30d5f5",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "381ddbb8-c054-4aa2-acb4-867cb93e48db",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "042021a2-861b-4799-b3f6-49bede1603af",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "0dedfcf2-60ac-4452-9ff5-c9a377a0adb2",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "244ad42b-c497-4c07-b8d3-b9414d730df6",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "2c490fa6-d132-450f-ad81-6c712076b581",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "706ce7da-accb-4361-8d10-79ad5c5fd649",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "476b3f63-5491-4f07-af74-a2aa37f6a54d",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "edfbb251-01c6-4d1d-bb32-bc5b94378840",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "fe5bdc3d-f41e-48bc-909b-f5ee485f1ffa",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "681e73ad-bc24-461e-8945-731ff4b9b6fd",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "8ea6cdac-893c-4df2-80d9-d50b3d621559",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "25eb3322-8094-46f1-86fe-38188b3d6a16",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "51af9415-5ef1-4b22-832e-b75a5761f5f9",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "f2d29e77-b39f-437c-ba33-f8bc257d7249",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "b03a903c-30f5-4b10-8f2e-80d24a06a8f2",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "7ff0f0f7-b534-4998-9b8b-b13a7dff844c",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "1e64e772-cad0-4563-b26b-f712f6a7d6d2",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "c506b59a-04f5-40f3-be77-1f5639c97d2b",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "b289cc89-c6f7-4fd4-afdc-a28fb5644b4d",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "d641b054-ee16-4bb5-b7cc-fe08d9d7fd9e",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "302d6a61-f444-450e-8fb4-7ebbc67d107f",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "5550242a-0ecd-4f8c-9114-7ee9aa9d06e0",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "8bbf98e6-fca2-4d2c-b518-353c893dc272",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "ad7b9619-f772-40ac-8daf-8105aa7c6280",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "d865eff0-8628-4d8b-9d98-008e367d09ca",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "5f520690-2d2a-4914-aefa-885b3a9bbf93",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "f5c46da0-cda5-4703-ba22-539190c7f136",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "4c2c0aa7-b26a-4fa3-84e7-d1e97b659df7",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "99f78a74-6895-4a0a-916c-1ae3cd20c55a",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "d31724b2-2f80-4719-a6c0-f6433664ad39",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "4301e463-e602-416e-a2bb-181f3baf6342",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "65bbd1d2-0e58-4033-859a-d0a0a7243dd2",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "c6a6cbb1-d5cb-489a-8a04-beb40d59e134",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "889a5377-3149-4139-a397-538713a5808b",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "924b480d-40ae-42d1-b688-107d96b8583b",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "984bb526-3f84-4806-8365-459a4aa7aa2f",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "b52dc5dd-8f4d-42e7-8258-0cacc8e16b63",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "606d9b6a-be92-4341-a01c-65383ebee5b8",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "43425c17-3ba7-4821-93b2-a392486c9c80",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "c28449ae-ed78-47ce-8834-6e07aa7918eb",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "59d3187e-64de-4fde-897a-322e0915f0ce",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "c194e109-effa-402a-90e0-ce8f98d4704d",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "cfcc4be9-fc75-45e9-8382-4a5a21b96747",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "8a5fd953-fb43-4d6c-8178-5a19f3870744",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "e309fdfb-2d1a-4cc3-bfa8-d3b71d863623",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "1960050d-f2e0-483f-88be-ba1ecfe27181",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "3472f19f-487e-48a2-bfa1-49f2351bbd30",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "9ba03100-d539-42c2-839e-e642b2bfc31f",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "2c3b6cc9-3347-4b59-8a61-ff856921dcd3",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "b554ac83-e628-4a41-9d00-c80dbcc5a3a5",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "0b26c350-a0e1-4ac2-9131-301222a0dfee",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "72e2221c-4e10-428b-96e8-bf8897d3c4e9",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "c6d8d26f-8991-4c5f-ab6f-3da744379e71",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "152f8843-99af-4bb0-896d-9f9e7bad7420",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "79d5e1a7-8379-40cb-a9ea-0615979d7042",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "27d9bd65-e5fa-4371-9efa-81ec6bc02849",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "49f6b55e-23c2-48d8-828a-022b220e90ef",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "e47e694c-1c5f-49d8-8f08-6cea47c515b8",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "46f50190-2e6f-4e13-9cde-ca035b0dec53",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "3701f127-61f4-49d5-a62a-a0c93024c110",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "fc716f4c-7696-4082-92f8-fbf879533172",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "f35522c6-2d6e-4d1a-a706-64534e192d24",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "ff7d0ac6-1f2d-4729-9c5a-f2dcb9e1b4b4",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "94881403-df5f-4fa2-b2fd-67a7d9a887c8",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "d09b9e21-e2ab-4056-80a7-71a6645bcd26",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "1af0503b-a64f-42ca-aba4-eaeee90e0412",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "638df137-b3e9-4a7d-945f-35d562346d90",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "a257412f-6677-460e-afcc-7d88eafd1840",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "308da235-1ffd-4d6b-ad9c-4738c5372965",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "83c49179-0454-4d2e-a37f-c1fb7c86acd7",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "df6b753f-f9bf-4869-a6ab-fdc1ad572a07",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "ca5f9509-bc2d-45ff-a9a5-92190f5beb98",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "27467032-8df0-4b59-8123-c260205904e6",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "82a0e142-173e-4720-8846-a8c12ff25807",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "b0328e6d-0556-4a0a-92c9-97952b0e3b59",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "f9b71b70-ec10-4a10-b186-c71cd258171a",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "3af5b99d-36cc-4c36-870c-c12156e35e8f",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "ba66f704-7c98-4042-b902-0340ca8380dd",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "abbfe1cd-4c44-4373-b4c9-a3613c8254e1",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "7a68dd1d-726e-4832-ab8c-43fc8ec56f30",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "97a111c7-c31d-427c-935e-24c924242cba",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "ed03f9d3-9aea-41c5-9db5-6b99e5bf6967",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "48d3b4d6-0979-4896-854c-db01be7c8f5d",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "62cf6222-d8cc-4647-992d-e7ce4b850038",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "ee98a416-75be-4267-98e0-e1928398f30d",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "c5f00b2e-5973-4679-8df6-9663dc0f72e9",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "d15794d0-2498-476d-b617-0c15ecaae577",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "2502954c-170d-4385-a59a-9ea66913573f",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "206f7a2d-09f8-40c6-becc-e12306611f3d",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "946f65b0-4e4c-4b71-9b4a-0117c50538fe",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "3ede656b-83cb-4557-88af-29e2dddb4efc",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "1ce0b969-736c-4d82-abc4-8f57c17ebd31",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "f95885ca-8515-4086-a9fd-9ea2557a500b",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "5698c3f6-edc9-4a8d-b041-92f4a0169d74",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "5fbcb65f-0962-486d-9a5b-34d2582d842b",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "3254bd72-ff23-4588-aac2-36c6f06f258f",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "0713c13b-3a52-4e1a-b25f-1b0b00cd7612",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "418abeb7-5dde-46d9-a937-9ae33e55193e",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "dea203d2-951c-4a31-b299-371673d275e8",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "dab9d734-4720-4cd9-99d3-2b1a81263128",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "7cf011ea-7f48-4481-be5c-84f307649b32",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "26c430a0-a9ad-47d0-a1f6-9e9cd512c2c3",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "a4fdc489-1ce6-4fe2-8d6b-580dca25c4a8",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "09e4cab2-5ae5-44fb-b67e-5c5afb0bfafc",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "30fcd9ab-2b0c-4f60-9e44-c45dcee363ef",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "bed6ae0d-b689-4f42-b4e1-a53ca63538cd",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "bd2bd206-b9d5-4aa3-905f-0d3fb2236cad",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "a29cc9e4-8699-4ed3-8320-6dd01df18f72",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "f8ebb7e3-f102-4e9a-b36d-84b41ac952b2",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "9fa9fab0-8006-4016-8a5e-07a7a6ca0841",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "993caeb1-bd9d-4af6-a6ff-795b89e20026",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "713ae60d-289e-468b-8d7e-019b22852580",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "c209ecef-c566-4802-84eb-84c66812ca07",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "b02de693-5e83-455d-8f53-2b27e9587d52",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "dbeea74f-fb3f-465f-aa5c-a535f0841b25",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "7d9fd467-0cc7-4b10-aa03-3e76ef81788a",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "21470dca-4165-4507-bc42-353eebf0558d",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "a7c3a1a5-4b3c-4753-a2ff-f7073e2c7724",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "4baa027c-20b1-4c3a-82e9-aa1c3ea0d24d",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "3488b326-a762-4c8b-b42e-d5e55fde95c5",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "7d43e5b8-b1d4-465d-a906-8b96afdc4144",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "64793401-fca1-4300-8ecc-6c476118b539",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "add0c62d-3041-4901-b1c3-b5e0e29d41f6",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "81443fa0-98da-4da2-ab41-7e1d4d1f54b9",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "34d3ff22-e9aa-49af-9aef-d499576757a6",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "32b8768b-1406-4321-bd74-cb29d518ae31",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "24817980-81d3-4b7d-8cf9-f712b13f5502",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "fecaa0c9-8320-4fb7-824e-427df2c50a2d",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "9b8fd818-b4dc-45af-b59a-2ad1d705ddb8",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "1d95d025-9bea-44b6-ab93-165ce3880c58",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "3a1fed31-f9b4-465d-85de-b3e4f8c0a387",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "aaa58e1f-5aa0-40d9-a68d-265dce37dbad",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "f4bfeab2-a932-41f3-9767-4c2a8cd6be41",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "2d0d90d5-a899-4a64-ab4d-6702fa57eee5",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "9206a488-c12a-4bc8-96d4-9cdfc5c2096d",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "a446b4d0-5dce-44f1-95ad-1ee0bcacb57e",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "4f02f126-8b9f-4f5b-8d75-19a849ffa2bc",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "566ab696-5e7b-425e-8fa7-c0f8a3bf565b",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "d308a2ac-bbe4-47eb-bcc3-dbe8affdb6ef",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "e38eb2fe-ba81-46ff-b918-ccddd5982b0f",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "bea1423b-f32f-47c8-a2b8-5532df3532e3",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "d0a4a708-19f9-4b0a-91eb-eefd7e101967",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "4fabaf20-d88d-44d2-9d18-ffe1a67cd485",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "3d304378-c5ca-4636-a5f1-a9185ef6b792",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "edc709be-b617-428d-9e79-4c0ab5cd4228",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "88495e09-fdd5-4201-a535-a11da5673e40",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "bafaad54-f011-4745-9b37-96192da28084",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "f3dcd9b9-fe43-4126-9d78-4cea15519b54",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "12f631f1-4bba-43d4-9053-9e28a8bb8af5",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "862a7f2d-5567-4de9-9233-8544eca53c17",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "442275a6-4571-4ec2-bcc8-e725c470dff8",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "73c0386d-afb3-4f78-89dc-a7024617d9d4",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "a2297202-4e7f-4862-adcc-879b110904c6",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "b9e9b575-289e-4110-89ce-3abbab413e05",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "4e2b9eaa-162e-4042-bab6-d6492049db51",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "3479c619-3866-46a7-8d23-9bbc8181b418",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "c40e808b-b0eb-48d1-aa7e-0c809928b981",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "1cf8556b-eddc-4231-ad01-90c3cc4f5ea8",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "1255fac4-38be-4641-a3a5-7bcf342bb5d4",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "4a1ec1e5-7abc-4d0b-b0b8-6944442977ed",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "5fc123b0-1bbe-49d5-842c-52e5ea767fff",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "09eeff16-e008-4a49-9a62-79220e9d6fc5",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "341da051-61ff-4cf4-8dac-48ddc217549f",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "c7155efb-efe4-45fd-919d-3f476ce6e71d",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "5ea5396c-f1cb-4242-ad8a-0043b78ca70d",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "1fda93ec-58e6-4823-83ff-8d81ff0c35a0",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "20b90522-7a05-4a35-b240-c6e045e2626e",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "0755085c-5edd-4361-869a-16ab600b88a3",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "e746dbfe-9598-4332-a54e-0add93b15163",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "e67849e2-43ed-4de3-8213-c06874225a46",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "f259344f-4e80-4b1a-8905-2fe719b1e51d",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "823f24ce-66d5-401a-8472-53f937ec3930",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "896b5fc1-2fe0-4af2-9236-184fc4ad8c4f",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "286e3f99-f3e8-4c6f-bd4e-96a4e3209608",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "aeffec9d-824a-4cb5-aa5b-a214800be173",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "8f238f7b-5779-4927-b0e6-38424cfef37a",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "e0bd931d-9693-4a19-ba52-52384221f868",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "2e96390b-2778-49c8-9f84-1983daf5485f",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "7ce7192e-e9aa-4ecf-8d9b-caff0a52248a",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "4bfbb405-d6f7-4590-b9c9-db137689442a",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "f2ac7713-4793-4d20-9dc4-bfa8e97ed102",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "efed3f69-9989-462a-a94e-c984aa58c558",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "c41f4c86-821e-4d4f-bdd1-bc08a6781029",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "64603eaa-f5bd-4c2f-8512-91cf4a7e7c8c",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "eada3667-5bab-424f-8042-d90cb6cc570f",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "4440c846-9fc0-4230-a6a6-1fee30ae837e",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "da74b073-87f8-4840-bf49-56ccc9893425",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "23a8d0c4-c9d4-4c8f-95ed-63ade4a650c0",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "ea3cefd7-8da7-4721-9a2d-2f3825d7a200",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "9fc1c65e-c2f1-4293-806d-b97b1fa87dd1",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "0027db0a-2c4e-4954-a048-67a041fac7f9",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "1c6f72d8-b34e-46cd-9d8f-bdb1b26e0c1d",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "adcd4875-c3a8-4655-a74f-412eb11ad58a",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "73dadd54-d081-4469-9f62-e9719e43f80e",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "4713d36c-f4d0-4ae5-8130-fbdeb0bda041",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "db34065f-3f44-42c3-acb2-40fb8570fe3f",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "24e1faad-f8ec-42b9-acc7-d94ef0aa4663",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "7978c273-e46a-4ee1-ac3a-e19bc206cabf",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "cf734340-5328-4d9a-87aa-bed9a7e26272",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "2d16d02c-652c-48c6-816a-c81995ebd003",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "a1616587-fbc1-4eec-87d3-beb965eb4e83",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "2b3dcc4a-5eea-4f14-a59e-e26ed92efd0f",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "dea9a020-09f7-4ca9-ab65-2b4aced6114a",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "014d6d7f-e7d5-4311-bb35-419fb1ae77a8",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "25ef9ea8-0e23-432c-9be7-20e0330e9bc3",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "11c28dae-946b-4634-87b9-35f178719582",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "639d0245-c3ab-4d0c-967b-39430987e368",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "07f2aad6-1a86-4ecc-9800-91a62e2e00c9",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "1732a5a9-492d-4f2d-a6e0-bc1c13a3b0f4",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "d9c5aa68-06c3-490f-bb0a-541c1f7bc919",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "e2ae3f6d-a118-4d66-bc03-20b89c05830f",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "b94dbfa5-b540-43c1-8d0f-054b5e0b63dd",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "34158ae3-e2b0-4cf6-b286-343251f9645b",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "0b670074-f48e-444b-91dd-ccd20307c658",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "524b755a-fbd5-470c-9c90-bd4b36170dc6",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "8eef2949-8e15-4eaf-bb0e-db95b6a8dc3e",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "ab447b72-f9ab-4ece-af09-b7c56ea67245",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "e1bfbdbc-4f9e-416f-b728-e62bd4d1f10d",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "e66bc06e-fabe-49c2-9053-532059f083d3",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "06cfd45c-3aef-4fd9-881c-a71d7052d411",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "7962316a-8bd9-4252-9783-c1f945547017",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "87f480bc-75e6-41b6-adcd-0fe10b8b84ee",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "3582e86e-9d50-4e46-b3fe-f1656ec3acbb",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "6b97579d-80b2-4d17-a6f2-f8ae57da15f4",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "326066d7-b17e-4265-82d0-bbe13c27b6c2",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "6cdb2445-4885-48d0-9a1a-7b01c3bd335c",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "133c9309-9697-4f14-acd8-58b635612567",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "68890c93-8c70-41b0-886c-1993ab7fdd6f",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "34379460-8d94-4b4b-bdde-37117d531bba",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "427ceeb4-f3b3-4c1a-89c2-23a6a1b21970",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "ce70325f-9916-4e66-9331-53dfaa290f17",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "2a29bb34-97e3-435d-a265-feeb9cdfd779",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "9e6fb734-35ee-49c8-9339-0da8bf172d92",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "628eb69e-b4eb-4723-9712-5e6c81dcff2e",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "76a8a5c1-4216-4df6-9f5a-43f66cc86ad3",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "97c9048d-a47c-4462-93fe-9f3f9dd0dc64",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "62473af9-5a88-4570-b4b3-37df5926d638",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "2af6ae64-4a2d-479e-ac4b-a792714aa6d7",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "c266b89a-7279-4ede-aa76-c4182189e2df",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "fe79944a-3bf4-47bf-b9c1-f3a061fda642",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "1ce5dcb5-0fbb-4818-b7a7-b4a5d9f38a65",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "817e35ef-3343-4b9f-a069-5dd94efec770",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "d9dc0c5b-ec84-434b-b56d-a039fb3c29c5",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "695303de-d4f8-4661-b035-8fe7f7c2b53d",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "240d9178-54e5-4ae3-bf76-a4b668050bb1",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "e3618e24-807d-4601-92cb-ddaa88f0ea4c",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "25963ef6-2522-4f94-8926-c9c76c57c212",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "06628722-2aae-4261-a21e-7d04ca6bf5c2",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "089ccc5d-73ea-4a06-bc09-f86629e2bfdc",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "73d937cc-8712-4036-b204-2424b87abf97",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "ce5ef8e2-e104-4416-8759-74977dc1fc11",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "b9134416-644c-4b1f-ab63-9956aae590cd",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "0c53f4d5-8d83-415b-ba35-9d716327d07d",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "4fb1babc-03c7-4980-95c1-57c6630583a5",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "c31b10c2-70b9-4ff8-8778-13785bff61b3",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "2d53f281-a5a9-4e7a-84cd-655a6acfe559",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "5b4acc01-b138-46e4-9dd7-a76180888646",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "00f64f99-118d-4988-bbe8-7207cc3949f4",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "853156f9-b6ba-4cc8-a038-aa427594a382",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "ee2bb764-f2fe-4daf-9459-ec9099507159",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "7a01aa30-4068-4348-9aa7-9eefd7c2f887",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "00dc0305-9eb6-4930-828a-0aa6e0eae562",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "43d9359a-d2ec-44fc-a766-424031de9f63",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "0efb65c6-be6a-4e97-ab4b-35c7494d0561",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "a98ab91a-fe73-46bf-82ef-362eb0a299ff",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "cba3e4c3-c9f2-4c38-b9f5-07c80535faec",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "e7e9dc0d-e02f-4a33-993d-35d57dfa7e71",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "1cb42bf5-57a7-4ab8-80dc-c265fdd4f65d",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "99b581a4-3901-4e3e-ba1e-5add231a1bda",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "16aa5093-6e83-43c6-8cec-cf6ff0ca333c",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "72e50928-5b38-4fbc-a3b4-f2b8cbc4ec8f",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "b2b4fc82-eabd-48db-9530-c6f2b87a5a02",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "c2191d35-c768-4202-9d0b-2212ed5b0779",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "cab71974-3f84-4879-b60d-ce792605d641",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "baa77983-9a0d-45b0-bb78-5d1499ff2d23",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "0884878a-820a-4df7-88bd-f7ade020da8b",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "bb95a462-daca-4d67-b472-1a4868fc4239",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "cac1b45b-9ae5-4ac5-955e-c8ff4e8fca93",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "fc2bfd40-198e-49dc-8b8a-a6f313cd5fa3",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "b6a46494-ab3a-41e2-83cd-58c1f370b085",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "54b6e13a-8d17-41f1-b72c-c2a2cb3d3512",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "8e69ff7c-a461-4ae6-bcf8-cf33e7d11f94",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "40b192a7-cc26-4bf2-af86-333321c898b7",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "09a79b92-574e-4e37-9f67-561f2656e5cf",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "86b96916-11c4-4ebd-9197-a54d07eff088",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "e879b54c-d295-4ad8-bb43-209060b646ef",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "199e0cd6-9f63-41de-8f95-8187bff9829e",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "04f1f94a-9315-44f6-956a-760196a6c7c5",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "960e4536-cc79-44c0-9599-9d6c4302d52b",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "3cfc219b-5924-4dc4-a2e1-3b7f86ffc39e",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "df3b6d47-55e3-4eab-845c-7785920624cb",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "c69b991e-c47b-4548-9b40-bb55779d5e4d",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "33052986-82b2-4953-aa4e-5b13e02e48c7",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "76dd0976-210d-4c73-b340-ec238bbcf1b9",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "cafb2962-9271-4dc8-83f9-3d0d651c0a4e",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "694d23e0-1403-46f2-8538-4e9586ed681e",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "eb02b62d-d75e-4ee0-87db-0f995f37cd42",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "fd07b477-4b92-413e-a0a8-67634ec6cb49",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "df8e94ba-3bda-4450-8650-b7c1f144c88a",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "d9e94e50-00b2-487c-8db4-5a898f2c5b50",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "8f80b92c-2ec1-4cee-923c-6ea3ce56ad93",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "779b19d2-2200-46a9-b239-61e9bf3d0da1",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "c0b65901-38da-42e0-9fa8-d540e75d06be",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "bcebaa0e-f551-4472-b1e9-07c238790bee",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "e2ef52ad-98e8-4775-bbb6-37fdb700f88d",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "af70fc48-e138-499d-b13d-158e9b84e31e",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "e50e1039-c6b6-4b48-84ad-899391a39893",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "e6ad6a98-0a12-42fc-a508-7563a82fa253",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "8978915e-c5ff-43e2-8ce3-a653d18bee47",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "52676028-74d5-4202-80a7-a9e04fa6b6bb",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "b1d3bc1a-9836-4328-928a-531f04ce1896",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "ea037c11-c5a8-4310-97e4-750f885299eb",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "4b4f0083-bd2b-41aa-81b5-a7f0b24f9343",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "1ccfe736-41fe-4961-b975-6c14f2217efd",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "36e0b2fb-9302-44a3-9210-564cd4b28820",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "54ac5ace-e3c9-419c-9308-b722f032334d",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "15e06090-802a-438f-9f19-487bca479146",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "599ddf8c-9eb4-4725-9ffb-5dafc01bc9f3",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "1a8c2a92-aeac-4c10-9199-2f857dc02352",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "0b490d01-143a-4a06-8985-4dab9b751ee5",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "ceae2534-7956-4ba0-a460-6d3147202078",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "1e4810b2-3313-4173-88a8-33b3e5018348",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "bf5fee62-ee6b-4a8c-b872-2dcba9cee97e",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "321597f8-644c-4a2f-81ef-8b447e3bde5c",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "e71ad832-14f8-47b6-a8a9-a4d2b193e539",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "c46989b0-1f23-4635-9eb3-45c3ef171c6c",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "cd5597ed-8efb-4cdb-b7f2-58e05182cbc4",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "ad6a65f1-74fe-442f-aa20-14df3fd53eee",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "65c6cd34-f971-4553-a5ff-9d7701bbc85c",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "76530134-1ba5-4019-a2ef-5debcfbb04fc",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "c0b9d9c2-4b46-4002-ab41-7146e0a3f275",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "7829757d-bb0a-40ff-aee6-34be583940bd",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "965dcfbb-30d2-4b87-be4e-0705a7b84429",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "d3fd4f38-e6df-48a5-8657-b06ef8732e9d",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "7f4b4fb4-81cd-4823-a860-2556aea26279",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "9fc17d91-753a-4f30-a290-fc6fe1d31a1b",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "f70a4a7e-a4db-487d-b5fa-21320b0037a7",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "f2f68199-f711-4f77-9bf3-4d6faa6b0d48",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "f7de1b82-20ad-401a-ab3e-99e461930078",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "c7a110b5-6921-484a-bdf8-0c35e273199b",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "f17c0b48-f4fd-4720-8a63-243f7dc3d3d4",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "7edff9d4-27a8-4451-a9a7-2e04eafd7e3d",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "f2be5b10-50c8-4054-ba0f-05eee56c631f",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "94be171a-5808-43a2-ab9f-33eca17bb1db",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "f9b8dc9b-27fc-4b63-8eef-a9a628911917",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "c2bb4543-8745-4a46-88d2-3648ced795fa",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "f160e6cd-1cbc-4b41-83d5-d9235b625ece",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "cce5af4b-0cdc-4aa5-93f9-8ff18a4a672d",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "9fbcabca-f54c-401c-b810-7cef94f5e7fb",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "a2850ff7-6016-44d0-824b-17020c869dc2",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "e4dabf88-326e-42b3-bc09-73aab9fd59f0",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "afb44ea7-4a62-4c5d-9552-9e988d12bb26",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "397ec85a-57b0-455e-ba18-f9f59f8ece67",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "97172c99-5ee5-42da-a014-45143582180e",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "6e53d203-2c42-4f18-8827-60c45150a659",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "f11cc1c9-a891-4da9-af61-0c81a0a71b93",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "c65e7462-7aac-44ba-868d-dc6284b18f03",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "bbab7812-133c-4ebd-b159-c9b2b61afd20",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "bead6e56-4f2d-4293-a1d7-4170e6f65b61",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "f0756561-6ba7-4512-a6f4-a0aab0d7abc0",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "58c12f9e-c98d-4e6d-b416-bd74f2465e9d",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "d8a548ee-a43f-4065-b362-7be20319fe1f",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "7d8773d0-c808-44d6-b61d-59e73f4c9dc2",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "05593a15-2cfe-4d6a-a368-19a637e6e737",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "f2a294ad-f13d-423d-b559-f8caa95a61f1",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "49a1b162-ae5e-4249-8442-47572cd9f94a",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "9b216b95-fe31-4d84-9f39-3117377e8a78",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "78d6b4a6-2109-4d3a-a734-cbaae2b79215",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "2ee27225-0dc9-4c94-9c16-51d582c53a60",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "3700cb54-63b4-48b5-a941-93555ef4d9f5",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "64f08170-3644-4855-bfdb-f459e14c5a6c",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "ef1789e0-4286-4ea8-8272-afb3c9c330af",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "ad289895-05b2-4c36-8700-c63b9df19aa0",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "4c0c5d9e-aa94-49af-a597-ac6cea69cdf5",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "faa2d8b8-4a3a-4328-b501-4d8d8b81931e",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "e38ece7d-496b-45ac-9468-41e75d6b9059",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "f7c311d4-2790-43f5-97f5-0842cde43363",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "f5167c12-49f0-4c5e-a263-ebe2e7450851",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "33bcbb71-ad53-42cd-8354-edd63e9eae61",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "e1b67240-8323-4364-b0fb-9b018816894f",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "470556e2-5f78-4312-a88d-90ee8f4b0b45",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "d371242a-a3a8-406a-a905-4e2a132331c2",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "0f79fd5c-72b2-4af8-809d-b8ca24f3e873",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "9cedd81b-c93a-40d9-aab3-9e843b5c5d7c",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "6fc8f75d-5e93-4321-8ee9-3b814e614d91",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "824259c9-96e1-4bfc-b6cc-40adecf7b13d",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "decb28ad-d788-471c-a476-7133cb57174a",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "e4d5b693-94ae-4bc1-895e-d639c5bc6fbb",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "2a99a7ef-06d8-4af1-ab6e-75573fed90f9",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "cfd6f231-b075-4317-b496-1e4cfa3e5832",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "edd0c0c3-e0fb-47fb-8f86-ca4604d6a6d5",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "21220ecb-03e8-4381-a10c-82e639287d74",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "e0459bf3-c00b-4eee-9de6-7b764b9cf2fd",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "7109e757-1b43-460c-a833-f023f6a33bbe",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "7180334a-3155-440b-be40-d8b88680041f",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "490043ba-54ba-4a47-9d3d-a193feabf138",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "cf893500-3d49-4c79-b84e-72b99ca45d3d",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "47135bf1-26e2-4317-be4d-61e5e5e9f2ac",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "d2218964-561c-48c2-97c3-8c5813d526a0",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "13130cca-91d8-429c-ad9a-34bc1819ac51",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "84edb244-1a1d-45f5-974b-5e2373ae7148",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "0277abec-f4be-47d4-9662-bdffbe3eaa6a",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "ebbdb503-f6c8-435f-af71-572c5ce3aed4",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "23c5cc98-1de6-4d49-a896-f5d4195dc5cf",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "ea0a559a-c391-44fa-9bd5-6208b309bac9",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "03f685e8-9fd7-4b40-bc81-74a30ea74f13",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "83de6cd5-cd2d-4d2f-a1c1-f933b67399f7",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "1df382bb-26ca-4b73-a6bf-912d772145ec",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "2aaec066-9798-4b3a-aec8-b67a6a017d58",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "d9b159cf-985f-4511-8919-9e796b34a7d4",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "bd389fd7-b376-4286-b5e9-0b22015da61a",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "f9ba4e0b-13a9-451c-bf8f-69bbef546f94",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "e2f22034-4be7-429c-b7d3-ef2d1354492a",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "d853f5b0-3432-456d-9333-086d17c7597b",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "162d4642-81f2-4265-9c2d-2c483f72f05c",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "a8633655-8065-4ce4-96fa-90881fdc6578",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "6e9e8fde-ea79-4d41-a4b2-9a7b22204ea4",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "22dda93a-0910-44b6-b75c-65f7e17186e2",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "e7f74bb9-273b-4aee-8402-4acf4040f577",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "291afab0-dfaf-48c1-a44a-a4abfac04b81",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "16f018cf-8b3f-488f-8b39-b490cce4c883",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "276809da-e1c5-4ea5-a233-d7ace44f2149",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "788784ad-47f1-4fee-8637-66d299af981d",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "dbbc3136-d536-4888-a2c5-6c94d038e59e",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "4131aa36-9791-410a-a51e-3d9d6a43a365",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "6b935217-b148-43df-9930-87820de86b28",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "c75aa812-bc51-4b88-abc8-1a3f9e70e1b2",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "68b206e6-50c2-46e4-b727-f65f717358d1",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "c8b80e77-6173-49da-b7d6-2daf617f93b3",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "aaac69bc-f001-4ba6-8a16-d07027d4bdc4",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "a600ef3f-cbb9-4597-a702-7923135ad638",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "a8c36be7-22d4-4c8c-973c-57f936c450c5",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "0f52540a-d514-4bf5-b195-a0c22050acc7",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "d5480b91-dce3-415f-9ea0-2e513fad4ed2",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "e7a754db-ca9e-4d7f-8c2c-e7ad06dbd2de",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "1c919465-dd24-4f99-b257-ea72943d08c1",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "b1d70b79-9e38-453b-ae9a-866928088a37",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "122e1d26-e1c7-4c4e-8ce1-0dd95cab4e85",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "62262186-98fb-4671-a0ce-666799b6ac4b",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "bad96843-bf8b-4762-b416-1ece8548288b",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "8252f8d7-136c-4285-a66f-bd762d63007e",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "2e37cabf-7c14-48b2-8898-273002d2adb0",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "18e88592-b022-4bbb-948f-9f085369fef6",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "35c3aaa9-1af1-4e18-b4c2-383589612745",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "5103ea39-77cc-4f0a-b3d7-59cf77386318",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "9bb55ddc-7586-401a-a48e-953bb6da7495",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "f54ab9fc-558f-4aab-a75a-f2403c18b76e",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "2d58ef4a-57bc-4e46-b652-ed0ff041e40d",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "9fc80e90-e964-4703-8be9-dee1f4a623b3",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "91e90cb8-562a-4dc7-89c9-5cd64dcc5fe4",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "70d56e9f-1286-4cf1-b8e8-1ce7c7255a8d",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "00337786-4ed1-4722-a83b-a83af4160137",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "9e90eff3-c677-4e62-8003-baafba1c7535",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "db3fa6ec-07c6-4f64-8320-d922f39ef3f0",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "ed6c6be2-e1de-42eb-a0cc-aa78bfee6e56",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "d395f0cd-2568-450f-ac1f-2dbc0bb75bc3",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "d64a3f0b-a58b-4027-9359-f15d7d9e2ff9",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "8d889917-e71e-4d44-a0f2-a5ecb15fbf7f",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "c3369be0-4961-4422-b44c-68f761d30ff5",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "56c419a8-3e25-4d09-84f7-410b66a5d88d",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "df15b999-1f6e-4bbc-93f3-c6874074e05d",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "9def2bbb-a836-4159-bfe2-3c4dfc1cb0cd",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "f3ea45a0-2d96-4346-b916-bf93020802d8",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "ac03d4ec-e2dd-4ea2-906c-41befd6fd47e",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "f87dad77-536b-4ffe-8124-3f4c4766895e",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "efd0a9a5-34f6-4fc6-bd84-b138230d17c8",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "a7235b45-fc8d-4b1a-8580-d80b7a660690",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "ef946d77-b86d-48d2-a505-a98f82075abe",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "8ec72123-2643-47ac-964d-c87ccac3f7fc",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "57ec88f3-2cca-4de9-9509-9f9077cb15ac",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "39acafed-e6df-4ce2-8af2-25eef8bc8024",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "5846014a-87ac-4065-a928-22a9517a9be2",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "0fa297a5-566d-4f9b-8ffc-484f7ca5b3ed",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "ab7de071-5ee2-4c15-a690-a04f2b6fd226",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "a66bdead-4bd4-4285-a649-e021435d613c",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "9a6d2ffb-663c-489e-a7a6-4946b7f2120c",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "d9243652-2695-41d5-87a2-71f08caef963",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "befb8e11-10d4-41a8-90e4-4d153b008320",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "a59b45a9-8d57-42bc-b4b2-17ea2c5ae9eb",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "fc17fbe0-1cdc-44ff-a85c-57a46356e6e6",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "e1d42bac-b84e-4581-b520-83c5bc084242",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "827403a8-33ed-4820-a4c5-36b3bc72857a",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "c96e0be3-2e00-4dd2-aaa1-b5a87d04962c",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "9912fb00-af67-4bde-ba96-964e620bd117",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "90040e9d-96bb-475f-96ad-7adc434bfa3a",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "6b94618a-e3a3-4b86-a563-8f3341c6782f",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "5a88631b-4aec-4537-ba5a-d1778fa41d3a",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "5ca891d6-9c71-4c99-94a3-a25e3f9e74ad",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "5e3493b8-31fc-4bcc-a894-704f1c41cade",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "fdbeaa4d-1b30-42c8-a8e0-a3dd6185617f",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "b12091cd-1c5a-476f-a743-7047a8ebff4d",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "ac038d53-7f39-4f63-a38d-257338486534",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "1e2c6042-ded1-41da-8866-b81efe160ed9",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "0cbaca08-03b1-4c99-8587-835284c1ba3d",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "5f18d8d5-b19a-477d-8e15-507e013040a7",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "489a145b-7f4b-4dda-9440-5cebadf0fdf8",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "0713c6a0-3fec-41fa-8104-24bd1e7962e7",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "4e4507af-86ec-4c19-a129-cd2950f63246",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "b4885bae-318c-4590-95cd-f700e592ad3b",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "d109dbb1-47ee-4454-b16b-3c7c8c3fbf55",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "2cac2050-b23c-428b-a1bc-3dca308bc970",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "16afb335-9d39-4582-80e3-ba0b341032f1",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "9339dc36-c774-4175-942d-3595c0d73ed8",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "b8489d1a-2d7b-48ef-a7c0-100099d70a32",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "e2b785a7-7372-4781-8fc5-aef0d063a34e",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "d76fb220-7024-44e6-8313-9bdb951c700b",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "c6c882ee-7c7c-49b0-a1dd-abe0fb70e612",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "6c99bc0d-3073-426e-ae56-8553f7e07356",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "e3b4e590-7421-4c5b-abe6-6067b55c80e7",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "f1ee8426-a62c-41fe-959a-3e3b07e28c06",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "5bff3157-85ea-40cc-8e10-034e90dc6822",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "bb436fa6-489f-4bff-8e61-0f50262f6996",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "3bc7ec4d-4858-4275-a111-5567c1cd8650",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "c228f111-5fd7-4cef-9571-810d1fc7b17a",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "ab3adee3-d1dc-406a-bc87-1dde88e7085c",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "5cb74110-a97f-46f6-be81-c88d3f8b2ce7",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "c8a03806-ac76-49f4-a16f-c43697556ecd",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "ca4dceff-5df3-4697-b574-5514c98e8d6b",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "751002a8-9828-48ca-a32c-576374075a06",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "25cd1513-4342-4fa3-97e4-3708a8330efd",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "05f43b5d-61f0-4139-9033-772c527f52f1",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "d235b582-711e-4b92-8d7c-80888d3e3428",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "6650e462-6529-4204-b6a0-6c21793cddfe",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "555c7f31-8331-4a96-973e-52d677970d5e",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "6cd8c967-58ca-4320-b648-1cdd14d21e24",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "1efa5218-b78e-4daf-9a2a-f9aafc415e69",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "8afde327-d223-4652-a9a0-a8a37ed4a9b8",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "b9315dab-fe65-4ce7-a5f8-c5322a0cc4a3",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "01cd65db-49a9-4b95-ba81-a47021658ca0",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "9c7b9a2b-0ed6-4167-b5c2-2eeed754f013",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "00e70c50-6941-46cf-8e31-2c600764238a",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "fed35fe8-5aea-47de-8f4d-333ede2a3315",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "a82188d1-a8f9-4123-9dc5-005430308fb3",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "b6a035ec-7706-4a36-89da-82e1669d4194",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "3521fa03-7f49-41b5-b751-f0af14068021",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "02a5561e-d59b-43eb-b60e-557210c971ce",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "dda94c54-9d83-47e6-bc8d-6485c5236bb9",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "f05c844b-47ee-475b-bed7-2611dcdad620",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "ad7b3904-d6d1-45ec-8d69-13971bdba105",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "bfe9dd37-022d-43d6-8ca1-071c8785ba22",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "9590666b-d65d-42dd-8ee6-d7baa76c356f",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "eecaf92d-9141-44fe-82de-b2c88614bcb8",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "17470487-c6be-4c8b-9287-9b91fa84b36c",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "725fc501-16dc-40a1-bb39-cd472ccf3017",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "761a657c-e306-465a-8a06-96574c59fb33",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "7e83e098-3c09-4dd9-bf25-ab66a288ed4a",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "b6406849-8caf-4f3c-b8c3-9b61a862ceff",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "7909e7d8-6bdd-4a5c-afd3-c0ec821b2dcc",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "a55fedc7-dc80-4baa-a9ea-316d0e031396",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "25da47a4-ec82-43b0-94c1-3b00bc855db7",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "56b3092d-41b7-4d2c-828c-e3df6a937ae3",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "ce4d45b3-0ab9-4019-8adc-613685060e6f",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "494151cb-c164-4f66-9690-8e35408101f6",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "4fbe2976-efe3-4918-915b-15bd6a937215",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "92f12ead-3fa3-437c-9fec-79649e81ea85",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "26888f5c-10ff-400e-9808-cfe45c3a57a8",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "d9ab4138-84a4-44e1-9b8d-c4dbb336a14f",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "b6e33a81-4a61-4175-bc81-206f66bd38da",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "9d586e28-f955-4d5e-a7e3-23509b54cc4f",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "c1bd27ca-323c-47f2-b7c9-4780254d8f89",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "69e47351-be15-479a-a0b4-6f9291c0ea48",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "ef15b1bf-b8fd-4488-a426-972e21f44d0a",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "5ca435d9-0284-4299-8a93-fc615b5359d6",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "c50cc339-243b-473a-95fa-1c30b97f62a8",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "6e32d3ce-28e3-4833-8edd-92611541d0c1",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "d1099895-364e-4287-98ad-176f7d4f97a8",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "a99702b8-8f18-46ea-bfcb-ac59b4280e52",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "f62345ed-e464-4586-99bb-6f281dfb2d35",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "77060560-f0ea-46fa-aa16-bd5921f7547a",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "4f54cf0f-7c05-4a77-ba8a-254b243420fb",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "bfbb0ea3-0603-41d4-904e-266f8ead0f2c",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "48db1061-d5e4-4f40-86ea-23880ceee636",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "9d38df49-5057-44a6-bb6c-cbb14c728dc3",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "e2e6630f-a8f8-4070-829e-e7175eb8080d",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "101abe46-3460-4cca-8255-fbea2bff01c1",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "8b8a3d4b-e91b-44c7-bac4-98f9d97ce760",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "50b34053-e48e-4d32-b6f0-b8e0124507bf",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "f918ecf9-d496-4a1a-81d2-9bcfb50dbdcd",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "f187842b-10a4-405c-9a71-4997255981aa",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "85c28a8c-dbaa-487c-9566-32d2adcb4378",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "90ef93d0-e9fd-4094-b986-55d38cec48ec",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "57566bf3-2d84-4369-aaa7-6893b82d358f",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "c1d01a61-2aae-4f58-acb8-9d75e8d13a10",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "5cefa74c-abbd-44d1-9d20-20572d1207f3",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "a503c071-cd0f-4a75-9489-222e90228186",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "456bd4e0-3314-4df1-8b85-5b1cdcfe0e95",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "25a8c643-a1fb-4865-8bdb-549a408241e6",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "0be4ab21-0d10-40e5-97f5-552bf05c8225",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "ef2fe7f1-5d0c-41da-adb3-6fe4eecad31c",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "a9a2182d-ee58-4510-8030-efe61b1e676a",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "8726b436-56c6-401e-b52d-4a57ed43c768",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "9f937fd4-accd-4235-8582-682fac6b534e",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "f404aac9-8c7d-473f-ba93-7ac07ef07f21",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "dcfbda62-deb9-4f04-a1f4-86aaa41a3e64",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "5309e993-82d2-493f-b0bd-5160c68ebebb",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "399284d8-1fb3-4269-afb6-9699c0a69069",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "38f58781-3b9d-4a62-aeb2-6ce2ab65db9e",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "a8a82d82-d5ef-4dc8-917b-c52a21a1966b",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "e1fdf5c1-911a-4ff9-bb5c-d13964f5ec98",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "87b8bae0-7546-4126-8c27-e0abb2f536c5",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "ec5b4526-7afb-4218-be28-04afcef75d79",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "8da0acc5-fe32-4216-be48-6b8a9719cebf",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "f405d6d7-5b79-4024-9ebe-dc4dd35b0561",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "81e98f8b-e5db-4194-a3a5-8dda84792f14",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "927f6b32-49fc-4df0-b417-549c90a4247c",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "a1f27b69-916d-4ebd-882f-c44eec5d9b27",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "f2d8f76c-89df-491a-a6bd-655793027bfc",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "112df73f-9a07-4cf6-8b5b-73ae96b5f2e5",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "ae13e109-8499-4ace-8635-c3c7b15ba494",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "ad07d7e8-9d06-47fb-b93c-61f8cd3523a5",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "faa39d32-f7d8-40b7-9774-b6783f9a711d",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "44d4567d-2dbf-487d-a340-2a1236e9487f",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "c3b046d7-3a79-492e-800e-f797bf60e3b6",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "6c7cca1b-325b-413f-961c-e921a1199b21",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "8fb6b3a7-3238-4dca-bcff-67880a7b3f11",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "f1b8c18f-222f-4f33-9078-159851086edc",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "2ca535cd-7406-4f21-a006-f47a068293f5",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "0cc1ce04-54c5-4b72-b06d-977c5200039f",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "cdad47dd-c4d6-49e2-9bdc-eb8ddd02dd70",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "16f6c319-fbc9-4710-af84-3d50e64b6fcc",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "c4495ea8-ef21-4d07-bed6-45ded3540a8c",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "c62a7f77-5692-4e85-a265-946c249e86e8",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "998111a8-9baa-4f20-9aca-d3bd63ec6934",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "38c01857-3746-493b-814a-4714f7213275",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "db9ade8f-8778-4587-afdc-bd367b0e12b9",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "90971314-43fd-422f-8311-0480124bfaf2",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "4366327e-475e-4f55-9fd0-24f8ec3abfd7",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "175fa9f2-d937-41ff-aae1-4dce42a04734",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "c805fa3b-c3c9-4113-a331-2f4a6d0d008e",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "9fd81c43-eb2e-4532-b3ad-e4ffc117c52d",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "26951d28-2b78-4812-92da-61a5f8f1b038",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "70bc319a-b909-4c7b-80bc-cdf434b11a76",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "60937cd9-2b94-4e1e-b455-a3513f0ce856",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "ab24b3e7-d721-4a7c-98db-a873effe0393",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "4692d87c-33fd-4cc8-8609-25f9021031ed",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "52f46cca-e96d-4902-a323-1b528ba9ac6f",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "51ca61d4-032b-4235-8cdb-765a94aabd7c",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "592d118c-46c3-4094-8363-a7ec962b7d96",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "839934cc-8778-49c9-afac-a98997c628b6",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "e2e7c680-2c63-4638-a75e-a2b23edc06e1",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "ca3fe38d-18e2-4f0a-a3ed-5f29529e3ede",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "41b8cb53-1ab0-4a30-b0f8-35a8db8e239f",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "dfa1949c-8cb3-4618-a049-19ff00880d18",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "ee7c8806-b799-4171-a144-791634c5c876",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "5a3c83e5-a647-4cf7-a235-30e5715ec060",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "d90a360d-242e-4d96-bba7-7bc6e77d6027",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "1c4a4d5d-bacc-460e-a849-c22ac8011a8c",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "78feef6f-b8c6-4f42-a511-c4625b1a7def",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "2416cb94-fd01-400f-9b1f-edb0d0f07591",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "1039c6e2-d583-43e2-bd85-cb01af2bafaf",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "869102c5-8ff9-44b4-8477-ca4d55adff07",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "1ab4cc07-3722-4e1b-be65-f4e30dfb5ad0",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "7f8b5aa6-40fb-4ea6-8ad7-1f83475810ed",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "732e7db8-1a66-437b-b570-03d6ca64d28d",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "90b1376a-15ca-41e7-bf7f-1d659e923ca6",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "8386204b-b7c4-40cb-81e8-28efbe932337",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "a2a6e644-4e7b-4ad1-b1d6-d877cc169d0a",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "7bb185b2-7559-45d6-91ec-93eddc98dcbc",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "9b2eb1d2-9c7c-42fb-9ec1-e9e4fb853939",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "2b214c9c-3969-425f-b639-97003484ebd9",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "b4603bbe-db90-4fee-a4c3-f8afea2b94a9",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "5bba16af-b59e-41a2-a42d-29c27491f251",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "bb18120c-ef8b-463a-a979-fdc3e99ce3f6",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "1affc90f-e0ce-43f0-b6aa-8cd5e8461274",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "4ff79e92-f84f-4808-a2cf-bf4eadae05c4",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "b9bf1585-18c1-4e52-8da6-9c47c9a34c40",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "b63e2859-2c4c-4000-98b4-0af619a2d881",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "f7915ce4-7a13-4379-8f71-c5aa3ef4a492",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "24bf1586-232c-47f0-a1a3-a15a599d4745",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "0faac4c6-bce2-4a9e-ab3e-60b5a0ca428e",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "39438844-5e2f-4c26-82c0-b61927a601eb",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "a3f94d43-5f82-457f-8bda-c55bdce24879",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "ff18eed5-d256-491c-ba0b-a261d1ad4f3a",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "276c8f5d-29f9-4573-9e20-7318cead08a8",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "dc70af0b-6270-47da-ba82-cdbe01e7d2a0",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "c74c4e59-4b80-4847-83ae-caf0181dc80a",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "e15c2ac0-0aa3-4d64-9601-468d099b6e55",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "de23cc39-e4d6-4efe-a8d0-d32874084a51",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "851b3fac-0e57-4419-aadf-7f1bdb48c719",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "b319761a-1b42-4f13-9dfa-1259c1129a7d",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "196a8a13-c251-4db9-a5ee-0ea724e8d3eb",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "d3ef4aa1-45f4-4604-bf75-a11cd86a9019",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "66fe808f-0459-417d-8f74-65fc0ba81507",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "4ad6d0a2-0d40-46cc-874a-d90bbaedd4df",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "9065b6a2-24d5-4e96-ae3c-5d5a43b891b0",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "641cb828-f6d1-454c-bb74-a204c5a06092",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "3298bb85-c5af-4687-aaf4-65b373544395",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "b9df52fa-8b54-4199-bf0f-2d3c5ac1208a",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "8e38b8a6-cf09-43f4-821b-caff62b8f76c",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "788d8f7b-e222-476c-9ca6-979015f8cc35",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "0144bc2e-844c-4ab1-b62e-c332ce0bb8b3",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "e96c9379-5ef7-403d-9b5d-0466832d5239",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "3943c1fa-d7d2-498c-b2dd-963d829acdee",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "b28359b8-a0a2-4dec-8ecc-8134d574c879",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "8dde70f9-f347-4fc2-849b-b88b079dc72c",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "115f25dc-6a2e-483f-97f4-3fdbc0b0a0d1",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "11c05581-9abe-4e90-928e-d8277c0479bb",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "31f3e2bd-282f-4e75-9413-1b418d863c72",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "e526a0a4-d537-425e-995e-9e138381e27a",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "82610838-0cac-438f-8c53-33a47c895aa9",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "ff6a68c6-6818-4c0e-80d0-4eeff1cc1321",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "1c79c15b-4983-4cc1-836f-848aaf2c6d7a",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "a42b88f0-48c0-4aff-9892-2ba9474e3722",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "669a2cfe-2d10-4cdf-8991-703845b377cb",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "68cd944f-40f5-4db9-ac54-e839e95e2e4e",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "c0444caf-82af-44da-a715-7e92c90108de",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "590edd33-0104-4479-8242-971e0549778f",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "071fb11f-83c1-47ce-b236-594ed984813c",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "f643feb5-cef9-4178-9554-94aa40a2b91a",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "c6045d41-4f11-4e9a-b950-98d801ebc8ea",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "50f0b4e9-658f-4522-9156-fdb20db3004c",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "6febc263-2cf8-42af-b010-67c8966147b5",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "89542888-161a-45e7-9d39-a9647d5e3beb",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "619bebe6-55c7-4fab-b10d-4fd10122bc0f",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "f172251c-126d-47ef-a02d-f21216951899",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "03d6cc18-a9ac-4c92-92d4-24a1e6ee4bc9",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "3ad53746-ef31-43d4-9f9b-7e9733e865eb",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "00bde61d-94c1-460b-bc9c-27f0d2cc6f50",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "d726c391-e367-4759-b1f9-47a3ebe43941",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "1518092f-17a1-4fac-8f64-8c1eea48b644",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "4a61dbfa-92f0-41f8-a86c-907397d2b956",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "3c12eb59-f812-4b48-856b-0ce0103f1cc0",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "b0d9cad0-d6d3-4d02-8af7-e8eb90d5cfe8",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "309b0e27-8b68-4159-9817-c292f8911510",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "68baa6e4-c477-4867-b46b-e52cabca3ea1",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "f616ffaf-5d83-4c72-94d6-2ab6c2eb16ea",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "2f759570-711b-402c-8bd8-0066684f4811",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "9a1a178d-f6a4-45da-8fff-09abfb9c401b",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "42db1a3e-2935-43c3-a7b1-b7ab572bb88f",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "636484e7-1779-4fff-a54a-06bb92a8e124",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "eeff4831-dded-49ec-9a72-f5aae959590d",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "314888d0-0a95-423f-b549-ab8e8f99ca43",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "621bef82-43eb-4173-8604-91f564d3f1e9",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "ab906d8d-3f0a-4213-b8e9-86f7d5c103cc",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "9fd92de6-aebe-465f-bc7d-ea9f7036800b",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "9c9beccb-c374-4c6a-9c6a-6709da46ecdd",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "3c46758b-ac14-4202-b787-d695a65f92bd",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "43fbdd33-4585-47fe-9fbd-e62c0b705c7f",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "113f4b94-ae24-4ac5-a16c-dc7fb60cf34b",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "facb8496-4eeb-43dc-b275-dcf8d37bc9b7",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "a95c5b15-90d5-48c1-acf6-1bb5ed18223c",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "900c9e24-be7c-4863-94d7-f890580536b4",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "376a16e3-03eb-4608-9bb3-1d36a705da45",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "43dafdd3-3f65-405b-a9ca-b4aaec6524a9",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "22672e48-27f8-4d23-9f66-adf2bdc902de",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "b3b4d544-e0da-445f-b555-84c3a3763502",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "2f6a0f44-36d2-4e6d-95f5-fb4f6697104d",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "cb26913a-3784-44b7-9daf-bc2f2be4d232",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "3f357e70-8468-4f51-9804-03f7e11ef56d",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "0afeee71-b1e4-43e2-9820-2aa6f9a1ae40",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "dcf14816-dc76-4348-a461-2b98d1e222e7",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "a275a948-f0e5-4297-84f4-36a5160aa99d",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "09a6d71e-7026-4adf-9c38-9be93d34897e",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "8054d393-fcc5-4cec-af64-f0e318d6a104",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "ab793008-c8cc-449b-bc16-ea064cfe6019",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "2c411723-2d8e-4ec1-bad2-9438fc942498",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "fd2bd16a-49fa-40d1-8e55-ca6de328239f",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "e429fe65-f5be-49a0-bfd4-a1bba2b36f07",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "415ee9ed-283a-4428-8d8f-c5bb7acb2d6a",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "2d1132aa-c3a1-42e8-95a9-68395e5ffbc4",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "be4f7a26-a467-40a1-97a2-a8f6c33806ff",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "73300210-20db-4369-957d-88e8228e7d1b",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "6a2c29b1-7224-4742-ab1f-780fe3d6eb1d",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "b8d0b2ae-2cdb-4f3d-8ba8-3b3dbb4e80ca",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "9ea510ff-5cf2-4f16-86f5-7909389e05b1",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "9923d7ca-bfae-4e89-9ea4-ba2bacd7b6ef",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "f0fc6d00-f7fb-4be7-b06b-ebebd01dba5c",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "26e3ff34-5dfe-4489-8afb-23c0d745c962",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "81fefb1f-8773-49ef-9828-3b8c57e52cfe",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "d17e5de7-09db-4ab3-9a99-13dfef6d4d78",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "ddb93025-01cc-4196-8cb9-7326d677c4f8",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "27e5ad07-de48-402f-9427-03d5dd514ace",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "3e210ef8-825c-4545-85b9-78bd9698d073",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "afabad9c-7a85-46be-be72-7b4230cd9d87",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "7535cd3b-4f08-419a-94a1-4a8f8b5059c1",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "95cde017-b6fb-4abf-8878-dd0b48b191f8",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "22796491-f024-48aa-83e5-b6c5eea5ef82",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "9e325636-53b7-4148-a970-e06c9cb6f57c",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "32e9c9e4-66aa-4af8-be70-6dabbed670cc",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "084c7a97-0e88-4e46-b999-ab2faa3dfa48",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "266780f4-89bc-42e8-a192-64e3c852a7d4",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "3fe06e03-b7cc-40dc-8ee4-e27614d94396",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "1932c8eb-5524-45e8-a6f3-ee768cf86b58",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "41b4a947-8c07-44f9-93cb-5ca4b0009f7c",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "d7faf259-99cf-4c8e-a781-09f39f8a3359",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "7aac5207-6bd8-4fbf-9ee0-d9abf61274dc",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "7d30c88b-0163-45ff-9bf7-fc3bf629a180",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "28ef74ba-e45d-4a9e-8314-4b78a7667a40",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "ba77af15-9dfc-426b-8f3b-6686a2192a61",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "ddea149b-29aa-4068-9964-a7574b488bad",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "e7062800-f40d-4b55-9f22-e0a6787b097a",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "728c5a71-be0d-4c65-ad80-41836bd625b6",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "55c379ae-3133-4527-a603-c4de79ca0087",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "7564862e-2ed4-4f62-80df-2caa53b74980",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "feb52f66-5dde-4c6a-a023-bf2f2ac44697",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "a3f61b00-6f0f-4a5f-b56b-03ca87fb6dd3",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "266850c7-ba89-4f87-bd22-3b4debdc7fc4",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "bf51aabf-9842-4077-a1fd-b992a4f83d79",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "7b05096f-fdff-4884-bf92-dbe6857e1209",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "6bbbad2e-84ef-4105-ba70-ecd6066197d3",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "b6fe576e-b4a0-449c-8cc9-4795ea652272",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "16624dff-7013-4715-aa4e-1e3440e910f2",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "081ea843-0e48-43b8-9f4f-19424228b0b5",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "c3831fb3-851b-4e64-a18f-89e4c2af654f",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "fc6bdcd0-c37e-423e-be57-3d7a23107a25",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "7ae006b8-08ef-455c-917a-4ebd3da81b59",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "b5335241-dda8-49d5-95d4-dbb64cb84c3f",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "75a660ca-b4b0-4ec2-b82e-7872b97e0f37",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "55e4379c-8aa5-4787-9487-7ff329c6f5a4",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "9aaf2dba-64c3-445b-b97b-f507bce816ac",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "05fa092d-18c8-4946-8bba-bd82b756e02b",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "5f31210d-6a7d-4bed-ac54-1dbf3dfa6c95",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "68e04aa7-5930-4d34-bd77-364e465d4336",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "d5e8df29-17a1-4ea1-8cde-ada41a536272",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "f1828daa-ee28-4c80-a252-31d195214d13",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "bf8c40b7-9b9a-49c7-aba0-5c2968c47aff",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "ddc96362-b9ce-4bd5-bc21-911b546990af",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "1904b2b1-cb4a-4087-9740-1b2c31b23a58",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "3489a820-c4eb-46ea-beb5-72ed6441da8c",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "e80c1a66-dd4c-43d5-8994-366873db8f94",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "8491d909-53eb-4cd7-9ba1-b3e60512ac60",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "eb9fec74-a5fc-45c8-b06a-dfc618f5abfa",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "7f71887d-cd65-490c-aa17-a1a657f89534",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "a69bc499-9582-4233-be1c-734546ffdfe8",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "a53615ab-d845-4508-a5ee-b7d673853fdc",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "1d0d7c4e-a6c1-4094-848e-7e2d485e6dfb",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "ec8b6749-b27c-4c6f-9fe6-fd35fc4ffd2e",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "0ebdb97b-4587-4898-9dcd-a6157e35b340",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "79cd389d-cc8b-4c63-8cff-507485c56f29",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "b1482117-f35b-417a-904e-75e9294c4fed",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "399d67a0-694b-4287-97ed-2be91d4fa6c2",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "37138170-7c1b-4ef7-94b4-dccd93b05c71",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "a4efa5af-31a9-47b1-8e6b-ff8071d9e6d4",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "2df7d186-5859-46b3-a4d2-f006c2fa54f7",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "746bb16c-e192-4c66-b5aa-fd04ae321633",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "e30a1624-370c-4469-b325-66a9a6307e8e",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "65121da2-8c1a-46c9-9741-a547cfede672",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "4dd5cbf5-a01c-4d93-9952-152e691c85b9",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "0ab8e5a1-0f83-4eaf-b142-83f32f1eded3",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "cb3899cf-a39c-4449-b14b-42fe10a728fa",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "65fdf618-548c-48de-a6af-edd6f7893ffd",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "5cec93e4-03cb-441a-a821-78ee85362ba9",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "4d29b83b-c154-40c5-9bfa-cd0f13814277",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "81ee6d00-df81-4135-baf5-139f106bcbf5",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "24e00e64-d24f-4ebc-b499-3e5dfb00e88e",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "772acc6d-b4a0-4e96-b9d9-177eebafb8f4",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "df5afc44-fc61-49c2-b023-1b3d5ca18eeb",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "eb9ad517-1fc4-41d3-871d-d2fb0047e042",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "43031058-c17f-4016-9206-ad7af071e09b",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "f314273e-0060-48de-b7de-31da7cc32973",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "6cd639c7-ad3b-4c93-bb39-603f606df424",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "fd1b8017-8090-4406-b90a-300e67b6583f",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "d451db83-bee6-4fa8-8184-4bd5b31e0a6e",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "deac1efb-9325-453f-8ad0-6514541a1552",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "243e0c01-ec24-4ecd-81b5-b4923a6bc4b7",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "d4423b7b-4602-41fb-b33c-b23a0aecf407",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "2aa6efb7-d187-4bb7-8596-eb7df9d6e785",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "6854a93c-ce61-4d73-b4ac-de885f55a7f5",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "6b60570f-48dc-4fe4-a7ff-863dd7e92da6",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "9e883352-a5b7-4c90-9efe-d5917c22bf31",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "3b407a67-1627-4e70-8d2b-278f28ca5272",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "ba9b1231-4d99-4621-beee-c87be3eae077",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "0cf6160f-8b74-4e9a-91c6-4798a48c9141",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "25b5f16f-a685-4357-9c41-e4153b637a68",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "28230a0c-c82e-4cb4-be4b-559139abf536",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "bceea2d4-b6da-4f5b-92c8-c6e54ab61bee",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "c0e9c7f1-1c83-4699-9c15-ec8c4cee9712",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "4d7a91c7-1c3d-42aa-b3f1-98bf9633c362",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "b4cf1e76-82be-4221-b558-cab5aa6ae137",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "358552bf-b8b0-4264-b61f-c6f4ed4c5a62",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "f7c97b02-9c9d-4061-a18d-3acce111d1bb",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "0523336f-4e4c-4af4-b3bc-e8bbc422dbcd",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "fe86654d-17c3-4389-9165-d961b6a1b06f",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "269b9b57-c27b-4b09-a855-3a82c0101914",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "18942e13-21a3-4344-a4f7-e64817c6aaf7",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "7792f535-1e8b-4fd8-bba2-b1e5b7ab4a72",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "31cfb25b-4b51-446b-9bc0-6d75e1a243ab",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "b5f8495f-eaae-49ef-bf47-c4aebbc06a77",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "fca21af5-be10-406a-98a4-a04266fb4279",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "c65230bb-c5a7-4365-80b7-8eda39e878c6",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "f5074026-8f27-4cd3-8c89-64c90e0f5541",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "958893ef-b552-415c-96b0-6989801e0275",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "5aba8a5e-d293-4acf-b000-a2fcba65379c",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "0e902214-5797-4999-8d57-91cb3112c80b",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "c1d4b623-3e99-4919-8752-90e8d53a62c2",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "79dfc526-c538-46cf-b5e3-ac01e5895d78",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "bef36b85-727f-4ba9-a203-8a3db94a1b9b",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "4a90eced-50ee-4f4c-8e00-59a207eef48f",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "c3c8c501-b077-4076-af98-a5c5c3b0326c",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "facd9101-79f1-49a1-a8c8-6cb0d72f4435",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "6c426d12-2600-4b86-a6e3-396dc89c96e8",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "70e6f6b6-eeee-4b3c-b30a-db9831eb469a",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "b0da0117-a9ca-4e98-929d-e46f78a1b265",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "abd17ffa-ac14-4b47-b71c-7756e54353f9",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "44b87dce-159d-4dee-9aca-4c777f74197f",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "8cca81c7-c629-494e-a6e8-a7cd6f4beee9",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "1dbc7586-8a23-4c67-8a82-baf70e424148",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "7bd4aace-0176-4481-8538-864accc898be",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "523c5061-3ac0-4df2-b837-73e79a69528d",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "022e7799-410a-40c5-8b29-5717de2a2df6",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "3611793c-98c9-4317-9fc9-570069795911",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "ea60bf4f-64af-4127-b901-253063c706d9",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "8c356fb6-77e8-4182-941f-0f23e25be64d",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "c5f28076-b992-4ecd-93b6-de74975f9c2c",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "9625e40b-8780-4587-b513-86d718530562",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "157bca7f-d72e-4d83-91bd-e8ff3ae12510",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "03727a83-d312-48ef-97bc-e2c3de86b1b7",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "8ce063b0-0a9e-4b0f-9bff-d8e7e6b2d872",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "c274adf7-67d2-4249-bc9b-e327cb4d0aaf",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "f28ebee6-91e2-4339-abc8-8404fc4db16b",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "3a95fcfe-afa0-43f3-af94-c0c2a39421c3",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "46a8a596-5af9-418b-a31f-d2482516c4b7",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "70e8dcb0-7700-4c33-997a-6d8df78746c7",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "ee998b88-a2c4-4bc2-8663-6a3c827c33d0",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "c0045006-7214-492f-844b-b533a7703fd3",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "d2d3416d-998d-4483-96c9-657c40d692e6",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "6c7558fd-f303-4042-adcf-43878ffc335f",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "a610ea43-254a-4026-b9fd-5793a744ea2e",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "9bf54286-8052-45fe-b30f-a4de1c4d5434",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "43ade59f-ad9e-4379-ac8a-76e8fd3d4ac1",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "31b93476-be1a-46b8-90f3-bf188a328752",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "cfacc21d-b6cb-4666-9990-862d4b36e303",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "4f7e90a9-27ad-4418-aa0a-427e0e3830ca",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "f48bb230-24ef-4b8a-bad8-879018ae0680",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "ae1cd631-cca1-4fd0-bf24-8f2903bab6c5",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "820f62ef-39eb-4edc-b8d0-53067e59c75c",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "b828a17e-f65d-431a-9a5c-b9dd597c69a0",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "4530952b-51b1-4abb-97e3-205d0fd38b02",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "4f1c5cf5-995a-4c44-89f6-634e24b8b18e",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "595b48fc-9077-47bd-a9a5-08004a6ad080",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "d0ac5951-8986-4446-8dc3-66fc31fcfa99",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "60e4c429-bada-4024-8d49-f012a249611c",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png"
        },
        {
            "id": "0ed048ef-bb08-4a59-b5b7-ebdf5dc11abc",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "cb490026-9c36-4406-92a8-e9c51d0f8be4",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "73552937-f637-4b86-a187-024d75d6a71a",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "5dc0f0c1-03ab-416e-86c4-b421e71ec72b",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "a452869f-e1b3-4ca7-ba42-d32a29277c33",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "7e65d3a6-c2bc-42b0-835e-cb13ce9b1422",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "8408634f-f474-4bc5-82c4-73cd9a68b00a",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "abee7868-17a5-4da5-b3ef-8d53284df70c",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "c18dfc99-9272-4d11-b1f5-7dc5bcc92d8a",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "1df28512-dd27-4584-9188-54ab519542f2",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "d2ca2a03-5f13-451e-a19f-3675c592a9ff",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "6346ab16-d762-4707-afe7-6f07142d6509",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "96310682-b104-4d25-bdaa-9f128ef0e173",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "da8fb603-6719-44fd-b75d-490b3d524c6a",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "60fb56c1-6bb7-4d5c-b252-16e00dea1709",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "689e1717-b443-4115-88d3-ae69e7c10b63",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "4607cd49-4cb6-4692-a9d2-0c1a97a2375f",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "b455d1f2-211c-4b4b-a5d8-998346bcc971",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "fe558783-783a-4fd3-a075-11fac0cf9c02",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "45bf3344-4111-4c72-bda2-2b24d77b09df",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "68b00fde-34d0-4f69-8500-f7b8fbf81512",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "2360e4e5-82d7-412b-99d5-eb596a87d516",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "8c9dad5b-93c7-4411-bf31-ada8bd00757c",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "939939b4-31e1-4bcc-a754-b363a8c92d04",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "7b50d85e-2cf0-4ac1-a521-2d71d8340c09",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "31a7a676-7844-42b8-a550-f8f314cec243",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "34567d31-4902-40cd-b82e-4a7900297558",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "02f90c78-e5b2-43cc-b667-1caad2643191",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "2e32183f-866d-47ce-b572-bad43d6e93e3",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "f380ac8c-83de-472e-b160-7a66ce0d90f3",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png"
        },
        {
            "id": "ca22a8e6-fff0-4c42-af4a-c843d176b543",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "5e399b69-4e74-4a88-8d98-60723c4eee9c",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "375b97dd-96ff-4a6c-9a0c-851c0bada34d",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        },
        {
            "id": "8e2032ba-fed9-4986-8d42-4dfad4b4cdd1",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "ec27d104-f149-4bc6-bd9a-35c5e569fd11",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png"
        },
        {
            "id": "acc85c01-6c5e-4057-a768-37302f9b0943",
            "name": "Awesome gray chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.99"
            },
            "pricePromotial": {
                "amount": 9900,
                "priceFormatted": "$99.00"
            },
            "decimal": 2,
            "image": "chair1.png"
        },
        {
            "id": "46e121a4-8fac-48be-9783-c07f54713fdc",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "bdf8166d-59d3-4fb1-bb2b-98d753ca9ae9",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png"
        },
        {
            "id": "e8d40081-caa4-4693-b381-501911fc8d0c",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "e155597d-a7d5-4e60-a30d-e5d54db7440a",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": "backpack1.png"
        },
        {
            "id": "44c6867a-9961-42ec-b86d-6ef95a33e490",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "1640a18a-ff64-4ade-9400-6b411779f5d2",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png"
        },
        {
            "id": "be14fe2b-f521-4c9d-ae58-f7b41464fda1",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "bd578ddc-8a2c-43ef-8c0e-e9c3f89dd62e",
            "name": "The best smartwatch",
            "price": {
                "amount": 34999,
                "priceFormatted": "$349.99"
            },
            "pricePromotial": {
                "amount": 32500,
                "priceFormatted": "$325.00"
            },
            "decimal": 2,
            "image": "smartwatch3.png"
        },
        {
            "id": "171992af-eac2-4b5a-b222-92f16653cec8",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png"
        },
        {
            "id": "8cda6aa4-54c0-40d4-af9b-3853bbfcc2b6",
            "name": "Very fast smartwatch",
            "price": {
                "amount": 39999,
                "priceFormatted": "$399.99"
            },
            "pricePromotial": {
                "amount": 35000,
                "priceFormatted": "$350.00"
            },
            "decimal": 2,
            "image": "smartwatch1.png"
        }
    ]
}


export const productReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const copyState = {...state}
            let resultElement = state.elements.find((ps) => ps.id === action.id)
            if (resultElement) {
                copyState.elementsForBasket = [{product: resultElement, count: 1}, ...copyState.elementsForBasket]
            } else {
                return copyState
            }
            return copyState
        }
        case 'ADD_PRODUCT': {
            const copyState = {...state}
            copyState.elementsForBasket = copyState.elementsForBasket.map(el => {
                if (el.product.id === action.id) {
                    return {...el, count: el.count + 1}
                } else {
                    return el
                }
            })
            return copyState
        }
        case 'DELETE_PRODUCT': {
            const copyState = {...state}
            copyState.elementsForBasket = copyState.elementsForBasket.map(el => {
                if (el.product.id === action.id) {
                    return {...el, count: el.count - 1}
                } else {
                    return el
                }
            })
            return copyState
        }
        case 'DELETE_ALL_PRODUCT': {
            const copyState = {...state}
            copyState.elementsForBasket = copyState.elementsForBasket.filter(el => el.product.id !== action.id)

            return copyState
        }
        default:
            return state;
    }

}



