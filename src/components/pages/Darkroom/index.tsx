import React, { useRef } from "react";
import { retrieveOauthToken } from "hooks/oauth-token";

import "./styles.scss";

const Darkroom = () => {
  const refFileInput = useRef<HTMLInputElement>(null);
  const dataToken = retrieveOauthToken();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const SUBMIT_HEADERS = new Headers();
    SUBMIT_HEADERS.append("Accept", "application/json");
    SUBMIT_HEADERS.append(
      "Authorization",
      `${dataToken.token_type} ${dataToken.access_token}`
    );

    const FORM_DATA = new FormData();

    // TODO enviar vários dados de uma vez
    if (refFileInput.current?.files) {
      FORM_DATA.append(
        "media_file",
        refFileInput.current.files[0],
        "picsum.jpg"
      );
    }

    // TODO pegar esses dados do form
    FORM_DATA.append(
      "custom_properties",
      JSON.stringify({
        title: "Lagoa",
        description: "Lagoa azul pastel",
        keywords: ["lagoa", " azul", "água"],
        author: "Mr. Sebastian Green",
      })
    );

    // TODO pegar o valor da url do env
    fetch("http://photobox.d3v/api/media", {
      method: "POST",
      headers: SUBMIT_HEADERS,
      body: FORM_DATA,
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="darkroom">
      <div className="container h-100">
        <div className="row align-items-center m-0 h-100">
          <div className="col-12 col-lg-8"></div>
          <div className="col-12 col-lg-4 h-50 bg-light bg-opacity-75 d-flex align-content-center flex-column justify-content-center align-items-stretch flex-wrap">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">
                  Multiple files input example
                </label>
                <input
                  className="form-control"
                  name="upload_media"
                  type="file"
                  ref={refFileInput}
                  multiple
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Darkroom;
