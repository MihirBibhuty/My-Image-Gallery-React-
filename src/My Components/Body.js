import React from 'react';

export const Body = (props) => {

    const cardStyle = {

        width: "18rem",
        border: "2px solid #403f3f",
        display: "inline-block",
        boxShadow: "5px 5px 12px 0px #4d4d4d",
        "&:hover": {
            cursor: "pointer",
            border: "10px solid red"
        }
    }


    return (

        <div style={{ minHeight: "65vh" }}>
            <div id="imgDiv" className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

                {props.data.map((images) => {
                    return (
                        <>

                            <div id='idNo' className="card my-3 mx-4" id="imgCard" style={cardStyle}>
                                <img src={images.img} className="card-img-top" alt="Image" />
                                <div className="card-body">
                                    <h3>Image {images.text}</h3>
                                    <p className="card-text text-secondary">This is the <span className="text-danger font-weight-bold">No. {images.text}</span> image of this Image Galary, and this image comes from the Unsplash Image API.</p>
                                </div>

                                <div className="d-flex align-item-center justify-content-center mb-2">
                                    <a className="btn btn-danger" style={{ boxShadow: "2px 1px 5px 0px #4d4d4d" }} onClick={() => { props.onDelete(images) }}>Delete</a>
                                </div>
                            </div>

                        </>
                    )
                })}

            </div>
        </div>

    )
}
