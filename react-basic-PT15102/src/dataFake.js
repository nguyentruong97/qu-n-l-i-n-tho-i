const dataFake = [
    {
        "id": "1",
        "name": "Oppo A5",
        "image": "data:image/jpeg;base64,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",
        "price": "407.00"
    },
    {
        "id": "2",
        "name": "Samsung Galaxy",
        "image": "data:image/jpeg;base64,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",
        "price": "39.00"
    },
    {
        "id": "3",
        "name": "Smart phone",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQptlUOQxB5YkJRZPrvIJLcPx9sr-rM4WLATQ&usqp=CAU",
        "price": "922.00"
    },
    {
        "id": "4",
        "name": "Samsung A7",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWQEemGhOWSdEilSWZonxMlhgLvk8I8NKoww&usqp=CAU",
        "price": "697.00"
    },
    {
        "id": "5",
        "name": "Vivo",
        "image": "https://image.voso.vn/users/vosoimage/images/f292826f702e6329704a73d45152b88c?t%5B0%5D=compress%3Alevel%3D100&accessToken=923f3e3c01712153f49ee18fbf58ffa8d9485d0aa68b54e0896f26778b831bab",
        "price": "498.00"
    },
    {
        "id": "6",
        "name": "Reno3",
        "image": "https://cdn.nguyenkimmall.com/images/detailed/649/10045584_dien-thoai-oppo-reno-3-den-1.jpg",
        "price": "461.00"
    },
    {
        "id": "7",
        "name": "Oppo A9",
        "image": "https://cdn.tgdd.vn/Products/Images/42/202028/oppo-a9-600x600-trang-600x600.jpg",
        "price": "580.00"
    },
    {
        "id": "8",
        "name": "Samsung j7",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0-kBa2DObx34aTq82HypFFKcvFF5BsDITGw&usqp=CAU",
        "price": "57.00"
    },
    {
        "id": "9",
        "name": "huawei Nova 3i",
        "image": "https://cdn.pico.vn/Product/38686/big_304934_dien_thoai_di_dong_huawei_nova_3i_tim_ine-lx2_purple.jpg",
        "price": "836.00"
    }
]
export default dataFake;