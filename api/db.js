import pkg from "pg";

const { Client } = pkg;

export const client = new Client({
  host: "db.vkhfytfeoyllapecfici.supabase.co",
  user: "postgres",
  password: "Iwanhanafiah",
  database: "postgres",
  port: 5432,
});
await client.connect();
console.log("Berhasil Connected");
