import "./styles.scss";

const Darkroom = () => {
  return (
    <div className="darkroom">
      <div className="container h-100">
        <div className="row align-items-center m-0 h-100">
          <div className="col-12 col-lg-8"></div>
          <div className="col-12 col-lg-4 h-50 bg-light bg-opacity-75 d-flex align-content-center flex-column justify-content-center align-items-stretch flex-wrap">
            <div className="mb-3">
              <label htmlFor="formFileMultiple" className="form-label">
                Multiple files input example
              </label>
              <input
                className="form-control"
                type="file"
                id="formFileMultiple"
                multiple
              />
            </div>
            <button className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Darkroom;
