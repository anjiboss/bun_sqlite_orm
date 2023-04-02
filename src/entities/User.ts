import { Database } from "bun:sqlite";
import { BaseEntity } from "../lib/baseEntity";
import { Table } from "../decorators/Tables";

@Table("user")
export class User extends BaseEntity {
    constructor() {
        super();
    }
}
