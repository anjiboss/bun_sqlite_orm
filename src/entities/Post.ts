import { BaseEntity } from "../lib/baseEntity";
import { Database } from "bun:sqlite";

export class Post extends BaseEntity {
    constructor() {
        super();
    }
}
