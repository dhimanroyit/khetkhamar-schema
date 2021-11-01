const product = {
    statusCode: 200,
    success: true,
    message: 'success',
    path: 'string',
    currentUrl: 'string',
    currentPage: 1,
    perPage: 20,
    firstPage: 1,
    nextPage: 2,
    prevPage: 0,
    lastPage: 20,
    products: [
        {
            id: 1,
            name: 'product name',
            brand: 'brand name',
            brandId: 'id',
            category: {},
            categoryId: 'id',
            subCategoryId: '',
            subCategory: "",
            description: 'product description',
            metaTitle: 'meta title',
            metaDescription: 'meta description',
            thumbImg: {
                alt: 'string',
                link: 'image link'
            },
            isStock: '0 || 1',
            stockQty: 'number',
            maxBuyLimit: 'number',
            minBuyLimit: 'number',
            discount: 'number',
            discountType: 'percent || amount',
            deliveryDays: 'number',
            deliveryTime: 'Date',
            deliveryType: 'cash || ssl',
            unit: 'kg || gm || etc',
            unitPrice: 'currency',
            videoLink: 'string',
            videoProvider: 'string',
            createdBy: {
                user: {}
            }
            

        }
    ],
}