const category = {
    statusCode: 200,
    success: true,
    message: 'success',
    categories: [
        {
            id: 1,
            categoryName: 'grocery',
            slug: 'grocery',
            bannerImg: {
                alt: 'string',
                link: 'string'
            },
            thumbImg: {
                alt: 'string',
                link: 'string',
            },
            childrenCategories: [
                {
                    id: 1,
                    categoryName: 'food',
                    slug: 'food',
                    bannerImg: {
                        alt: 'string',
                        link: 'string'
                    },
                    thumbImg: {
                        alt: 'string',
                        link: 'string',
                    },
                    
                    childrenCategories: [],
                    parentCategory: {
                        parentId: 'string',
                    },
                    isAgeRestricted: 0 || 1,
                    metaDescription: 'grocery',
                    metaTitle: 'grocery',
                }
            ],
            isAgeRestricted: 0 || 1,
            metaDescription: 'grocery',
            metaTitle: 'grocery',

        }
    ],
    path: 'string',
    currentUrl: 'string',
    currentPage: 1,
    perPage: 20,
    firstPage: 1,
    nextPage: 2,
    prevPage: 0,
    lastPage: 20

}