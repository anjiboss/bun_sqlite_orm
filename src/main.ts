import { User } from "./entities/User";
import { DataSource } from "./lib/dbSource";

const dbsource = new DataSource("db/mydb.sqlite", "src/entities");
const userRepo = dbsource.getRepository(new User());
