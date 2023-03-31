import { Database } from "bun:sqlite";

export class BaseEntity {
    static database: Database;
    query: string = "hello";
    constructor() {}
}
