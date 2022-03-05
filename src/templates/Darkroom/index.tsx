import React, { useRef, useState } from "react";
import config from "config";

import styles from "./Darkroom.module.scss";
import { useEffect } from "react";
import * as DataTokenProps from "types/data-token-props";

const Darkroom = () => {
  const refFileInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const SUBMIT_HEADERS = new Headers();
    SUBMIT_HEADERS.append("Accept", "application/json");
    SUBMIT_HEADERS.append(
      "Authorization",
      `${dataToken.token_type} ${dataToken.access_token}`
    );

    const FILES = refFileInput.current?.files || new FileList();

    const FORM_DATA = new FormData();

    Object.keys(FILES).forEach((key) => {
      const FILE = FILES[Number(key)];
      FORM_DATA.append("media_files[]", FILE, FILE.name);
    });

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

    var myRequest = new Request(`${config.BASE_URI_API}media`, {
      method: "POST",
      headers: SUBMIT_HEADERS,
      body: FORM_DATA,
    });

    fetch(myRequest)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={`${styles.darkroom} darkroom`}>
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
