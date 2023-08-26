import { Model, Table, Column, DataType } from "sequelize-typescript";


// create a new Tutorial: create(object)
// find a Tutorial by id: findByPk(id)
// get all Tutorials: findAll()
// update a Tutorial by id: update(data, where: { id: id })
// remove a Tutorial: destroy(where: { id: id })
// remove all Tutorials: destroy(where: {})
// find all Tutorials by title: findAll({ where: { title: ... } })


@Table({
  tableName: "tests",
})
export default class Test extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id"
  })
  id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "title"
  })
  title?: string;

  @Column({
    type: DataType.STRING(255),
    field: "description"
  })
  description?: string;

  @Column({
    type: DataType.BOOLEAN,
    field: "published"
  })
  published?: boolean;
}
