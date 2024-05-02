export const getImageUrl = (path: string) => {
    console.log("returning url path");
    console.log(path);
    console.log(new URL("/assets/navbar/menuIcon.png", import.meta.url).href);
    console.log(new URL(`/assets/${path}`, import.meta.url).href)
    return new URL(`/assets/${path}`, import.meta.url).href;
  };