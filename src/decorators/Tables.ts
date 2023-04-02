import { BaseEntity } from "../lib/baseEntity";

function Table(name: string) {
    return (target: typeof BaseEntity) => {
        target.tableName = name;
    };
}

export { Table };
