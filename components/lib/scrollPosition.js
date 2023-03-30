export const scrollPosition = (scrollY, index) => {
  let mode = "light";
  // synopsis
  if (index === 0) {
    if (scrollY > 1436 && scrollY < 1496) {
      mode = "dark";
    }
  } else if (index === 1) {
    if (scrollY > 1435) {
      mode = "dark";
    }
  } else if (index === 2) {
    if (scrollY > 1435 && scrollY < 1640) {
      mode = "dark";
    }
  } else if (index === 3) {
    if ((scrollY > 1435 && scrollY < 2168) || scrollY > 2474) {
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
