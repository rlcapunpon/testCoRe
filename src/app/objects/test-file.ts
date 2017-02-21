import { SourceFile } from './source-file';
import { Test } from './test';

export class TestFile {
    private _filename;
    private _lastModifiedDate;
    private _tests: Array<Test>; // transform to list

    constructor (fileName: string) {
        this._filename = fileName;
    }

    getFilename() : string {
        return this._filename;
    }
}