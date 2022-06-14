import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "autenticacion.perfil"})
export class Profile{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_usuario: number;

    @Column({default: false})
    administrador: boolean;
}