export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("redux").EmptyObject & {
    questionsApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getAllQuestions: import("@reduxjs/toolkit/dist/query").QueryDefinition<number, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
            headers?: import("axios").AxiosHeaders | undefined;
        }, unknown, unknown>, never, import("../services/questions/questionsSlice").QuestionType[], "questionsApi">;
    }, never, "questionsApi">;
    questionData: import("../services/questionDataSlice").QuestionListState;
}, import("redux").AnyAction, (import("@reduxjs/toolkit").ThunkMiddleware<import("redux").CombinedState<{
    questionsApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getAllQuestions: import("@reduxjs/toolkit/dist/query").QueryDefinition<number, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
            headers?: import("axios").AxiosHeaders | undefined;
        }, unknown, unknown>, never, import("../services/questions/questionsSlice").QuestionType[], "questionsApi">;
    }, never, "questionsApi">;
    questionData: import("../services/questionDataSlice").QuestionListState;
}>, import("redux").AnyAction> | import("redux").Middleware<{}, import("@reduxjs/toolkit/dist/query/core/apiState").RootState<{
    getAllQuestions: import("@reduxjs/toolkit/dist/query").QueryDefinition<number, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
        url: string;
        method: string | undefined;
        data?: any;
        params?: any;
        headers?: import("axios").AxiosHeaders | undefined;
    }, unknown, unknown>, never, import("../services/questions/questionsSlice").QuestionType[], "questionsApi">;
}, string, "questionsApi">, import("@reduxjs/toolkit").ThunkDispatch<any, any, import("redux").AnyAction>>)[]>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
