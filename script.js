// 等待DOM加载完成
document.addEventListener("DOMContentLoaded", function () {
  // 获取视频元素
  const video = document.getElementById("fraudVideo");
  const videoSource = video.getElementsByTagName("source")[0];
  const langEN = document.getElementById("lang-en");
  const langNL = document.getElementById("lang-nl");

  const contentEN = document.getElementById("content-en");
  const contentNL = document.getElementById("content-nl");
  const investmentText = document.getElementById("investment-text");
  const actionBtn = document.getElementById("action-btn");
  const cardTitle = document.getElementById("card-title");

  langEN.addEventListener("click", function () {
    videoSource.setAttribute("src", "assets/fraud_eng.mp4");
    video.load();
    video.play();
    langEN.classList.add("active");
    langNL.classList.remove("active");

    contentEN.style.display = "block";
    contentNL.style.display = "none";
    cardTitle.innerText = "Sign up now";
    investmentText.innerText =
      "With a starting investment of only €450 supported by AI and under supervision of De Nederlandsche Bank.";
    actionBtn.innerText = "Continue with DigiD";
  });

  langNL.addEventListener("click", function () {
    videoSource.setAttribute("src", "assets/fraud_dutch.mp4");
    video.load();
    video.play();
    langNL.classList.add("active");
    langEN.classList.remove("active");

    contentEN.style.display = "none";
    contentNL.style.display = "block";
    cardTitle.innerText = "Meld je nu aan";
    investmentText.innerText =
      "Met een startinvestering van slechts €450 ondersteund door AI en onder toezicht van De Nederlandsche Bank.";
    actionBtn.innerText = "Ga door met DigiD";
  });

  // 如果视频存在，添加一些基本控制
  if (video) {
    // 视频播放结束时的事件处理
    video.addEventListener("ended", function () {
      console.log("Video playback completed");
    });

    // 视频错误处理
    video.addEventListener("error", function (e) {
      console.error("Video error:", e);
    });
  }

  // 为操作按钮添加点击事件
  if (actionBtn) {
    actionBtn.addEventListener("click", function () {
      // 获取当前选择的语言
      const currentLang = langEN.classList.contains("active") ? "en" : "nl";
      // 跳转到揭露真相的页面，并传递语言参数
      window.location.href = `reveal.html?lang=${currentLang}`;
    });
  }

  // 平滑滚动到顶部
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
