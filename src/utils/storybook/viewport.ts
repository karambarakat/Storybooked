export const withWidth = (width: number) => {
  return {
    defaultViewport: "viewport" as any,
    viewports: {
      viewport: {
        name: "viewport",
        styles: {
          width: width + "px",
          height: width + "px",
        },
      },
    },
  };
};
