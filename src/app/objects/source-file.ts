export class SourceFile {
    private _filename;
    private _lastModifiedDate;
    private _source: string;

    constructor(fileName: string) {
        this._filename = fileName;
    }

    getFilename() : string {
        return this._filename;
    }
}