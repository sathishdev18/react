
const Cr=()=>{
    return(
        <>
        {/* Carousel */}
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators/dots */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to={0}
              className="active"
            />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
          </div>
          {/* The slideshow/carousel */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.cricbuzz.com/profiles/1413/virat-kohli"
                alt="Los Angeles"
                className="d-block"
                style={{ width: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDPwd8VOSmJvwzia-vlv11TxvtOAQli2zB8g&usqp=CAU"
                alt="Chicago"
                className="d-block"
                style={{ width: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="data:image/jpeg;base64,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"
                alt="New York"
                className="d-block"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          {/* Left and right controls/icons */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
        <div className="container-fluid mt-3">
          <h3>Carousel Example</h3>
          <p>
            The following example shows how to create a basic carousel with indicators
            and controls.
          </p>
        </div>
      </>
      

    )
}
export default Cr