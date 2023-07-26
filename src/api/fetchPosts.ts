import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { filterPosts, sortPosts } from '../helpers/post';
import { postsActions } from '../store/reducers/postsSlice';
import { RootState } from '../store/store';
import { Post } from '../types/post';

export const fetchPosts = createAsyncThunk<Post[], string, { state: RootState }>(
    'posts/fetchPosts',
    async (page: string, thunkAPI) => {
        const { rejectWithValue, dispatch, getState } = thunkAPI;
        const state = getState();
        try {
            const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: 10,
                    _page: page
                }
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(postsActions.setTotalCount(response.headers['x-total-count']));
            dispatch(postsActions.setPage(Number(page)));
            let posts = filterPosts(response.data, state.posts.query);
            posts = sortPosts(posts, state.posts.sort);
            dispatch(postsActions.setPosts(posts));
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
