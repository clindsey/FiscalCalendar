window.require.register("views/base/View", function(require, module) {module.exports = gamecore.DualPooled.extend("View", {
  getUsedLength: function() {
    return this.getPool().getUsedList().count;
  }
}, {
  dispose: function() {
    return this.release();
  }
});
});
