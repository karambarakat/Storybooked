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

export const render = (props: any, ctx: any) => {
  return <ctx.parameters.Render {...props} />;
};
