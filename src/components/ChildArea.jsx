const styles = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = ({ open }) => {
  return (
    <>
      {open ? (
        <div style={styles}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
