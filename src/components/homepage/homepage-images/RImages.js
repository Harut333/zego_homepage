import r1 from "../../../assets/images/rooms/1.png"
import r2 from "../../../assets/images/rooms/2.png"
import r3 from "../../../assets/images/rooms/3.png"
import r4 from "../../../assets/images/rooms/4.png"
import r5 from "../../../assets/images/rooms/5.png"
import r6 from "../../../assets/images/rooms/6.png"


const roomsImg = [
    r1,
    r2,
    r3,
    r4,
    r5,
    r6,
]

function RImages(images) {

    return (
        <div className="roomsImgs">
            {

                roomsImg.map(item => {
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

export default RImages