import { Database } from "bun:sqlite";
import { BaseEntity } from "./baseEntity";
import Path from "path";
import fs from "fs";
import { User } from "../entities/User";

type ExtendFromBaseEntity = new (...args: any[]) => BaseEntity;

export class SetupDB<T> {
    database: Database;
    entities: { [key: string]: ExtendFromBaseEntity } = {};

    /**
     * @param db path to sqlite file relative from project root
     * @param entiryPath path to entities relative from project root
     */
    constructor(dbPath: string, entities: ExtendFromBaseEntity[]) {
        this.database = new Database(dbPath);
        entities.forEach((entity) => {
            this.entities[entity.name] = entity;
        });
    }
}
