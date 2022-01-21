CREATE TABLE "things"(
  "id" serial PRIMARY KEY,
  "body" text NOT NULL CHECK ("body"!=''),
  "updateAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "createAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "things"("body") VALUES
('test');

UPDATE "things" SET "body" = 'new test', "updateAt" = CURRENT_TIMESTAMP
WHERE "id"=1;

DELETE FROM "things" WHERE "id"=1;

SELECT*
FROM "things"