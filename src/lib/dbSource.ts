import { Database } from "bun:sqlite";
import { BaseEntity } from "./baseEntity";
import Path from "path";
import fs from "fs";
import { BaseRepository } from "../repository/BaseRepository";

type ExtendFromBaseEntity = new (...args: any[]) => BaseEntity;

export class DataSource {
    database: Database;
    // entities: { [key: string]: ExtendFromBaseEntity } = {};
    entities: ExtendFromBaseEntity[] = [];

    /**
     * @param db path to sqlite file relative from project root
     * @param entiryPath path to entities relative from project root
     */
    constructor(dbPath: string, entityPath: string) {
        this.database = new Database(dbPath);
        this.entities = this.loadEntities(entityPath);
    }

    /**
     * Load entities from path
     * @param path path to entities relative from project root
     * @returns array of entities
     */
    loadEntities(path: string): ExtendFromBaseEntity[] {
        const enteries: ExtendFromBaseEntity[] = [];
        const absolutePath = Path.join(import.meta.dir, "..", "..", path);

        fs.readdirSync(absolutePath).forEach((file) => {
            const removeExtension = file.split(".")[0];
            try {
                const entity = require(Path.join(absolutePath, file))[
                    removeExtension
                ];
                entity.database = this.database;
                enteries.push(entity);
            } catch (_) {
                console.warn(
                    "Cannot import entity: " + removeExtension,
                    "make sure Entity name is same as file name"
                );
            }
        });

        return enteries;
    }

    getRepository<T extends BaseEntity>(entity: T): BaseRepository<T> {
        return new BaseRepository<T>(this.database, entity);
    }
}
