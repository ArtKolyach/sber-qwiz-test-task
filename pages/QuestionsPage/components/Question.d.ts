import { type FC } from 'react';
import { type QuestionType } from '../../../services/questions/questionsSlice';
interface QuestionComponentProps extends Omit<QuestionType, 'incorrectAnswers' | 'correctAnswer' | 'type'> {
    onChange?: (answer: string) => void;
    chosenAnswer?: string | null;
}
export declare const Question: FC<QuestionComponentProps>;
export {};
