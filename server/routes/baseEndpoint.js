class BaseEndpoint {
  constructor(_model) {
    this.model = _model;
  }

  // getAll() {
  //   return this.model.findAll().filter((item) => item.status);
  // }

  createOne(data) {
    const entity = new this.model({ ...data });
    return entity.save();
  }

  // getById(id) {
  //   return this.model.findByPk(id)
  //     .then((entity) => (entity.status ? entity : {}))
  //     .catch((err) => err);
  // }

  getByEmail(email) {
    return this.model.findOne({ email });
  }

  // updateById(id, data) {
  //   return this.getById(id)
  //     .then((entity) => entity.update({ ...data }));
  // }

  // deleteById(id) {
  //   return this.updateById(id, { status: false });
  // }
}

module.exports = BaseEndpoint;
