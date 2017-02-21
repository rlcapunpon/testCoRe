export class User {

    id: number;
    password: string = '';

    constructor(values: Object = {}) {
	    Object.assign(this, values);
    }
}