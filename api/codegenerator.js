class CodeGenerator {
  static generate() {
    let sampleSpace = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let length = 8;
    let result = '';
    for (var i = 0; i < length; i++) {
      result += sampleSpace[Math.floor(Math.random() * sampleSpace.length)];
    }

    return result;
  }
}

module.exports = CodeGenerator;
