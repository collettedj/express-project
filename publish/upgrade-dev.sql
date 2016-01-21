
CREATE SEQUENCE "Users_id_seq"
	START WITH 1
	INCREMENT BY 1
	NO MAXVALUE
	NO MINVALUE
	CACHE 1;

CREATE TABLE "Users" (
	id integer DEFAULT nextval('"Users_id_seq"'::regclass) NOT NULL,
	email character varying(255),
	"firstName" character varying(255),
	"lastName" character varying(255),
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);

ALTER SEQUENCE "Users_id_seq"
	OWNED BY "Users".id;

ALTER TABLE "Users"
	ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
