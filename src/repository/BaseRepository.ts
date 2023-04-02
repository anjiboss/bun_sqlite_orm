import { Database } from "bun:sqlite";
import { BaseEntity } from "../lib/baseEntity";

export class BaseRepository<T extends BaseEntity> {
    private model: T;
    private datasource: Database;

    constructor(datasource: Database, model: T) {
        this.model = model;
        this.datasource = datasource;
    }

    save(instance: T extends BaseEntity ? T : never) {
        this.datasource.exec(instance.query);
    }
}
