import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "autenticacion.usuario"})
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 14})
    run: string;

    @Column()
    nombres: string;

    @Column()
    ape_pater: string;

    @Column()
    ape_mater: string;

    @Column({default: true})
    activo: boolean;

    @Column({default: true})
    reseteo_contrasenia: boolean;
}