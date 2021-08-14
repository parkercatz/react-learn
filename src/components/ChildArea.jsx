import { memo } from "react";

const styles = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo(({ open }) => {
  console.log("ChildAreaがレンダリングされた");
  const data = [...Array(20).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={styles}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
