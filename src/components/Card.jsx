function Card({ h1, img1, p }) {
    return (
        <div>
            <h1 className="text-[25px] w-[150px] font-bold pt-[80px]">{h1}</h1>
            <img src={img1} alt="" className="w-[350px] mt-[10px]" />
            <p className="w-[300px]">{p}</p>
        </div>
    );
}
export default Card;