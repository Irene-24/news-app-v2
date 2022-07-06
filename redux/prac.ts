import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

enum FETCH_STATUS  
{
    IDLE = "IDLE",
    PENDING = "PENDING",
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED"

}

interface Article
{
    title: string,
    pubDate: string,
    image_url: string,
    link: string,
    description: string,
    creators: string[] | null;

}

interface PageData
{
    lastFetched: string,
    data: Article[];
}

//https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&page={page}&category={catrgory}&language={language}&&country=us,ng,gb,ua,cn

//allow them to pick 5 countries

interface State
{
    status: keyof typeof FETCH_STATUS;
    activePage: number,
    news:
    {
        [ key: string ]: PageData;
    };
}

const initialState: State =
{
    status: FETCH_STATUS.IDLE,
    activePage: 1,
    news: {}
};

const generateNewsCategorySlice = ( name: string ) =>
{
    const getNews = createAsyncThunk<
        Article[],
        number,
        { rejectValue: any; }
    >(
        `getNews/${ name }`,
        async ( page: number, thunkApi ) =>
        {
            try
            {
                return [];

            } catch ( error )
            {
                return thunkApi.rejectWithValue( error );
            }
        }
    );



    const slice = createSlice( {
        name,
        initialState,
        reducers: {},
        extraReducers: ( builder ) => { }
    } );

    return {
        [ `${ name }Slice` ]: slice,
        [ `${ name }GetNews` ]: getNews
    };
};

const { historySlice, historyGetNews } = generateNewsCategorySlice( "history" );

// const historySlice = history.slice;
// const getHistoryNews = history.getNews;

export
{
    historySlice,
    historyGetNews
};
