import g1 from "../../../assets/images/gallery/1.png"
import g2 from "../../../assets/images/gallery/2.png"
import g3 from "../../../assets/images/gallery/3.png"
import g4 from "../../../assets/images/gallery/4.png"
import g5 from "../../../assets/images/gallery/5.png"
import g6 from "../../../assets/images/gallery/6.png"
import dataGallery from "./dataImages/dataGallery"
import "../../responsive/365px/imagesBoxes_resp.css"

const galleryImg = [
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
]


function GImages() {

    return (

        <div

            className="galleryImgs">
            {/* {dataGallery.map((obj) => {
                return(<div key={obj.id}></div>)
            })} */}
            {

                galleryImg.map(item => {
                    return (

                        <div className="galleryImg1">
                            <img src={item} />
                        </div>
                    )
                })
            }
        </div>
    )

}



export default GImages