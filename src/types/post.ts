export type SortGroup = 'id' | 'title' | 'body'

export type Post = { id: number; title: string; body: string };

export interface PostsSchema {
    isLoading: boolean;
    error?: string;
    posts: Post[];
    reservedPosts: Post[];
    // pagination
    page: number;
    totalCount?: number;
    // filters
    query: string;
    sort: SortGroup;
}