import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedPassword1707202231095 implements MigrationInterface {
    name = 'AddedPassword1707202231095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teachers" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "students" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "teachers" DROP COLUMN "password"`);
    }

}
