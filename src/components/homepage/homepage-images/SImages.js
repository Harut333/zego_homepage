import s1 from "../../../assets/images/services/1.png"
import s2 from "../../../assets/images/services/2.png"
import s3 from "../../../assets/images/services/3.png"
import s4 from "../../../assets/images/services/4.png"
import s5 from "../../../assets/images/services/5.png"
import s6 from "../../../assets/images/services/6.png"


const servicesImg = [
    s1,
    s2,
    s3,
    s4,
    s5,
    s6,
]

function SImages(images) {

    return (
        <div className="roomsImgs">
            {

                servicesImg.map(item => {
                    return (

                        <div className="roomsImg1">
                            <img src={item} />
                        </div>
                    )
                })
            }
        </div>
    )

}

export default SImages