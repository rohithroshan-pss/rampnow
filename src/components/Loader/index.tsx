import BeatLoader from "react-spinners/BeatLoader";
import Backdrop from "@mui/material/Backdrop";

const override = {
  display: "block",
  margin: "0 auto",
};

const Loader = () => {
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1000 }}
        open={true}
      >
        <BeatLoader
          color={"#020027"}
          loading={true}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Backdrop>
    </>
  );
};

export default Loader;
