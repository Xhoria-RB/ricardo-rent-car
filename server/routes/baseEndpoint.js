class BaseEndpoint {
  constructor(_model) {
    this.model = _model;
  }

  getAll() {
    return this.model.find();
  }

  createOne(data) {
    // eslint-disable-next-line new-cap
    const entity = new this.model({ ...data });
    return entity.save();
  }

  getById(id) {
    return this.model.findById(id);
  }

  getByEmail(email) {
    return this.model.findOne({ email });
  }

  updateById(id, data) {
    return this.model.findByIdAndUpdate(id, data);
  }

  deleteById(id) {
    return this.updateById(id, { status: false });
  }
}

module.exports = BaseEndpoint;
