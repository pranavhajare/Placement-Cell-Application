{
  try {
    const routes = {
      home: "/",
      jobs: "/jobs",
      profile: "/profile",
    };

    document.querySelectorAll(".nav-links a").forEach((item) => {
      console.log(window.location.pathname);
    });
  } catch (error) {
    console.log(error);
  }
}
