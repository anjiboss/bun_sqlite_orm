/**
 * Decorators for defining DB table schema.
 */

import { BaseEntity } from "./baseEntity";

function table(name: string) {
    // check if table is already defined
    return function (target: typeof BaseEntity) {};
}
