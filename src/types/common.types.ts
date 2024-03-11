export type Pageable = {
    page: number;
    size: number;
    sort: string[];
}

export type PageOptionItemEntity = {
    totalPages: number;
    totalElements: number;
    pageable: PageableObject;
    size: number;
    content: OptionItemEntity[];
    number: number;
    sort: SortObject;
    numberOfElements: number;
    first: boolean;
    last: boolean;
    empty: boolean;
}

export type PageableObject = {
    pageNumber: number;
    pageSize: number;
    offset: number;
    sort: SortObject;
    paged: boolean;
    unpaged: boolean;
}

export type SortObject = {
    sorted: boolean;
    empty: boolean;
    unsorted: boolean;
}

export type OptionItemEntity = {
    createdAt: [],
    id: number;
    title: string;
    code: string;
    value: string;
    enabled: boolean;
    system: boolean;
}