import { SortGroup } from "../types/post";


export const getAllNumbers = (totalCount: number) => {
    totalCount = ceil(totalCount)
    const arr = [];
    for (let i = 0; i < totalCount; i++) {
        arr.push(i + 1)
    }
    return arr
}

export const ceil = (totalCount: number) => {
    return Math.ceil(totalCount / 10)
}

export const sortPosts = (arr: Array<any>, sort: SortGroup) => {
    return arr.sort((a, b) => {
        if (sort === 'id') {
            return a.id - b.id;
        } else {
            return a[sort].localeCompare(b[sort]);
        }
    });
}

export const filterPosts = (arr: Array<any>, q: string) => {
    return arr.filter((a) => {
        return a.body.includes(q) || a.title.includes(q) || a.id.toString().includes(q);
    });
}