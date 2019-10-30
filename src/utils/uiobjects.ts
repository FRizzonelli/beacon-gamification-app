import filter from "lodash.filter";
import includes from "lodash.includes";
import { QuestionMetadata } from "../models/quest";

export function isQuestionWithTextInput(question: QuestionMetadata): boolean {
    return (question.kind === 'number' || question.kind === 'text');
}

export function addOrRemove<T>(array: T[], value: T): T[] {
    if (includes(array, value)) {
        return filter(array, item => item !== value);
    } else {
        return [...array, value];
    }
}

export function swapArrayElements<T>(arr: T[], x: number, y: number) {
    if (arr[x] === undefined || arr[y] === undefined) {
        return arr;
    }
    const a = x > y ? y : x;
    const b = x > y ? x : y;
    return [...arr.slice(0, a), arr[b], ...arr.slice(a + 1, b), arr[a], ...arr.slice(b + 1)];
}

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

export function getLetterFromAlphabetByIndex(index: number): string {
    return ALPHABET[index];
}
