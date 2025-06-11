// 等待DOM加载完成
document.addEventListener("DOMContentLoaded", function () {
  // 获取视频元素
  const video = document.getElementById("fraudVideo");

  // 如果视频存在，添加一些基本控制
  if (video) {
    // 视频播放结束时的事件处理
    video.addEventListener("ended", function () {
      // 可以在这里添加视频播放结束后的逻辑
      console.log("Video playback completed");
    });

    // 视频错误处理
    video.addEventListener("error", function (e) {
      console.error("Video error:", e);
    });
  }

  // 平滑滚动到顶部
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
