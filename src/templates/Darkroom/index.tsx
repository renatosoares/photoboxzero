import React, { useEffect, useRef, useState } from "react";
import APP from "config/app";
import styles from "./Darkroom.module.scss";
import * as DataTokenProps from "types/data-token-props";

type DarkroomProps = {
  dataToken: DataTokenProps.default;
};

const Darkroom = ({ dataToken }: DarkroomProps) => {
  const refFileInput = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [requestMessage, setRequestMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const toastEl = document.querySelector(".toast");
    if (typeof document !== undefined) {
      const bootstrap = require("bootstrap/dist/js/bootstrap");
      const toastComponent = new bootstrap.Toast(toastEl);

      setShowToast((prevState) => {
        if (prevState) {
          toastComponent.show();
        }
        return false;
      });

      const eventHiddenBsToast = (event) => {
        setRequestMessage("");
      };

      toastEl?.addEventListener("hidden.bs.toast", eventHiddenBsToast);

      return () => {
        toastEl?.removeEventListener("hidden.bs.toast", eventHiddenBsToast);
      };
    }
  }, [showToast]);

  const handleSubmit = (event: React.SyntheticEvent) => {
    setLoading(true);
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
        title: "Lorem",
        description: "Lorem, ipsum dolor sit amet.",
        keywords: ["lorem", "ipsum", "dolor", "sit", "amet"],
        author: "Benedito Silas",
      })
    );

    const MEDIA_REQUEST = new Request(`${APP.base_uri_api}/media`, {
      method: "POST",
      headers: SUBMIT_HEADERS,
      body: FORM_DATA,
    });

    fetch(MEDIA_REQUEST)
      .then((response) => response.json())
      .then(() => {
        setRequestMessage("Load images success!");
        setShowToast(true);
        setLoading(false);
      })
      .catch(() => {
        setRequestMessage("Load images failed!");
        setShowToast(true);
        setLoading(false);
      });
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
                  Load Multiple files
                </label>
                <input
                  className="form-control"
                  name="upload_media"
                  type="file"
                  ref={refFileInput}
                  multiple
                />
              </div>

              <div
                className="position-fixed bottom-0 end-0 p-3"
                style={{ zIndex: 11 }}
              >
                <div
                  id="liveToast"
                  className="toast"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div className="toast-header">
                    {/* <img src="..." className="rounded me-2" alt="..."> */}
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="toast-body">{requestMessage}</div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Loading..." : "Load"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Darkroom;
