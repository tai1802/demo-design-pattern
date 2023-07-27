
const utils = (() => {
  let instance;

  function initialize() {
    return {
      sum: function () {
        let nums = Array.prototype.slice.call(arguments);
        return nums.reduce((numb, total) => numb + total, 0)
      }
    }
  }

  return {
    getInstance: function () {
      // Nếu đối tượng này chưa được khởi tạo
      if (!instance) {
        // Khởi tạo lần đầu tiên
        instance = new initialize();
      }

      // Không khởi tạo nữa, chỉ trả về đối tượng đã khởi tạo
      return instance;
    }
  }
})()

const firstU = utils.getInstance(); // Cùng lấy 1 instance
const secondU = utils.getInstance(); // Cùng lấy 1 instance

console.log(firstU === secondU); // Trả về true là đúng vì cùng thuộc 1 instance duy nhất

console.log(firstU.sum(1, 2, 3, 4, 5)) // 15 // working
