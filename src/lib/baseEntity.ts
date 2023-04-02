import { Database } from "bun:sqlite";

export class BaseEntity {
    static tableName: string;
    static database: Database;
    query: string = "hello";
    constructor() {}
}
