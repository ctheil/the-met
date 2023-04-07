export const scrollPosition = (scrollY, index) => {
  let mode = "light";
  // synopsis
  if (index === 0) {
    if (scrollY > 1509 && scrollY < 1570) {
      mode = "dark";
    }
  } else if (index === 1) {
    if (scrollY > 1509) {
      mode = "dark";
    }
  } else if (index === 2) {
    if (scrollY > 1509 && scrollY < 1714) {
      mode = "dark";
    }
  } else if (index === 3) {
    if ((scrollY > 1509 && scrollY < 2254) || scrollY > 2551) {
      mode = "dark";
    }
  }
  // } else if (index === 1 && scrollY > 35) {
  //   mode = "dark";
  // } else if (index === 2) {
  //   if (scrollY > 35 && scrollY < 298) {
  //     mode = "dark";
  //   } else if (scrollY > 300) {
  //     mode = "light";
  //   }
  // } else if (index === 3) {
  //   if (scrollY > 858 && scrollY < 1148) {
  //     mode = "light";
  //   } else {
  //     mode = "dark";
  //   }
  // } else if (index === 4 && scrollY > 35) {
  //   mode = "dark";
  // }
  return mode;
};
