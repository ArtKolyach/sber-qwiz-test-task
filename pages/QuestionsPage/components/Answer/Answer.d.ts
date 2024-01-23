import { type FC } from 'react';
interface AnswerType {
    questionText: string;
    text: string;
    onChange: (text: string) => void;
    checked: boolean;
}
export declare const Answer: FC<AnswerType>;
export {};
