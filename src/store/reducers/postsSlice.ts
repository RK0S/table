import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts } from '../../api/fetchPosts';
import { filterPosts, sortPosts } from '../../helpers/post';
import { PostsSchema, SortGroup, Post } from '../../types/post';

const initialState: PostsSchema = {
    isLoading: false,
    error: undefined,
    posts: [],
    reservedPosts: [],
    page: 1,
    query: '',
    sort: 'id'
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
            const q = state.query;
            state.posts = filterPosts(state.reservedPosts, q)
        },
        setSort: (state, action: PayloadAction<SortGroup>) => {
            state.sort = action.payload;
            state.posts = sortPosts(state.posts, state.sort)
        },
        setTotalCount: (state, action: PayloadAction<number>) => {
            state.totalCount = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
            state.isLoading = false;
            state.error = undefined;
            state.reservedPosts = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        });
    }
});

export const { reducer: postsReducer, actions: postsActions } = postsSlice;
