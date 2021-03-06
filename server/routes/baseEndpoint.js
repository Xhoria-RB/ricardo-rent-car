const options = { status: true };

class BaseEndpoint {
  constructor(_model) {
    this.model = _model;
  }

  getAll() {
    return this.model.find(options);
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
    return this.model.findOne({ email, ...options });
  }

  updateById(id, data) {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  deleteById(id) {
    return this.updateById(id, { status: false });
  }
}

module.exports = BaseEndpoint;
