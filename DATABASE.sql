CREATE TABLE "contacts" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"phone" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	CONSTRAINT "contacts_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




