export interface RawQuestionsResponse {
    response_code: number;
    results: QuestionResponseType[];
}
export interface QuestionResponseType {
    type: string;
    difficulty: 'easy' | 'medium' | 'hard';
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}
export interface QuestionType extends Omit<QuestionResponseType, 'correct_answer' | 'incorrect_answers'> {
    id: number;
    shuffledAnswers: string[];
    incorrectAnswers: string[];
    correctAnswer: string;
}
export declare const questionsApi: import("@reduxjs/toolkit/query/react").Api<import("@reduxjs/toolkit/query/react").BaseQueryFn<{
    url: string;
    method: string | undefined;
    data?: any;
    params?: any;
    headers?: import("axios").AxiosHeaders | undefined;
}, unknown, unknown>, {
    getAllQuestions: import("@reduxjs/toolkit/query/react").QueryDefinition<number, import("@reduxjs/toolkit/query/react").BaseQueryFn<{
        url: string;
        method: string | undefined;
        data?: any;
        params?: any;
        headers?: import("axios").AxiosHeaders | undefined;
    }, unknown, unknown>, never, QuestionType[], "questionsApi">;
}, "questionsApi", never, typeof import("@reduxjs/toolkit/dist/query/core/module").coreModuleName | typeof import("@reduxjs/toolkit/dist/query/react/module").reactHooksModuleName>;
export declare const useGetAllQuestionsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query/react").QueryDefinition<number, import("@reduxjs/toolkit/query/react").BaseQueryFn<{
    url: string;
    method: string | undefined;
    data?: any;
    params?: any;
    headers?: import("axios").AxiosHeaders | undefined;
}, unknown, unknown>, never, QuestionType[], "questionsApi">>, reducer: import("redux").Reducer<import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
    getAllQuestions: import("@reduxjs/toolkit/query/react").QueryDefinition<number, import("@reduxjs/toolkit/query/react").BaseQueryFn<{
        url: string;
        method: string | undefined;
        data?: any;
        params?: any;
        headers?: import("axios").AxiosHeaders | undefined;
    }, unknown, unknown>, never, QuestionType[], "questionsApi">;
}, never, "questionsApi">, import("redux").AnyAction>, reducerPath: "questionsApi", middleware: import("redux").Middleware<{}, import("@reduxjs/toolkit/dist/query/core/apiState").RootState<{
    getAllQuestions: import("@reduxjs/toolkit/query/react").QueryDefinition<number, import("@reduxjs/toolkit/query/react").BaseQueryFn<{
        url: string;
        method: string | undefined;
        data?: any;
        params?: any;
        headers?: import("axios").AxiosHeaders | undefined;
    }, unknown, unknown>, never, QuestionType[], "questionsApi">;
}, string, "questionsApi">, import("redux-thunk").ThunkDispatch<any, any, import("redux").AnyAction>>, useLazyGetAllQuestionsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query/react").QueryDefinition<number, import("@reduxjs/toolkit/query/react").BaseQueryFn<{
    url: string;
    method: string | undefined;
    data?: any;
    params?: any;
    headers?: import("axios").AxiosHeaders | undefined;
}, unknown, unknown>, never, QuestionType[], "questionsApi">>;
