import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { SetupDB } from "./lib/dbSource";

const dbsource = new SetupDB("db/mydb.sqlite", [User, Post]);
dbsource.entities["User"];
