import React from "react";

function ErrorPage() {
  return (
    <div className="container ">
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center mb-2">
            <h1 className="display-1 fw-bold text-white">Opps!.....</h1>
          </div>
          <div className=" mt-0">
            <p className="d-flex justify-content-center align-items-center text-white error-text">
              Sanırım bir hata var, Şehir ismini yeniden kontrol edebilir
              misiniz ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
